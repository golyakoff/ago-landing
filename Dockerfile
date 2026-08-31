# The public landing page at reserve-me.ru's own apex - a single, self-contained static HTML file
# (no build step: no bundler, no framework, everything inline).
#
# `15-07`/`adr/0051`: CI publishes this to GHCR as ghcr.io/golyakoff/ago-landing, tagged with the
# full 40-character commit SHA - the same shape adr/0047 gave the three Ago.Chat.* hosts. It
# supersedes adr/0026's "build it on the VPS and import it into containerd", which is now the
# fallback rather than the mechanism.
#
# This is the easiest of the four frontends to make honest, and worth saying why: there is no
# environment input here at all - no API origin, no issuer, no build. The commit fully determines
# the image already, which is adr/0051's rule holding trivially rather than by effort.
#
# nginx's own "-alpine-slim" variant - the closest analogue to ago-chat's Chiseled-image preference
# that actually exists for nginx: official image, not a bespoke build, with the dynamic modules this
# static-file-only container never uses stripped out.
FROM nginx:1.31-alpine-slim
# `17-04`: the base tag names the image nginx's own maintainers published, not the Alpine packages
# inside it *today* - Alpine ships security fixes into its package repositories continuously,
# independent of when a base image was last rebuilt from them. `apk upgrade` reaches into the live
# package repository at build time and pulls whatever is patched *now*, so this image stays current
# between nginx's own rebuilds instead of only at the moment this Dockerfile happens to be edited -
# ago-widget's and ago-console's own companion fixes found this the hard way, against the same base
# image family this repository shares. Found here specifically while `15-08` tried to publish this
# image and Trivy's own scan blocked it on a real CVE (`CVE-2026-14456`, libcrypto3/libssl3) already
# fixed upstream - this repository had never received the `17-04` treatment the other two had.
# `--no-cache` skips the local index without leaving `/var/cache/apk` behind.
RUN apk update && apk upgrade --no-cache
# The commit this image is built from (`15-07`). Defaults to "unknown" rather than failing the
# build: a local `docker build` for a quick check is a legitimate thing to do, and it should say
# "unknown" out loud rather than lie or refuse.
ARG GIT_COMMIT=unknown
# The OCI annotations a registry and `docker inspect`/`crane config` read. `.source` is not only
# documentation - GHCR uses it to link the published package back to this repository, which is what
# makes the package inherit the repository's own visibility instead of arriving orphaned.
LABEL org.opencontainers.image.source="https://github.com/golyakoff/ago-landing" \
      org.opencontainers.image.description="AGO Platform landing page" \
      org.opencontainers.image.licenses="MIT" \
      org.opencontainers.image.revision="${GIT_COMMIT}"
# `15-08`: without this, nginx's own stock config sends no Cache-Control at all - see nginx.conf's
# own header comment for the incident that found it.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
# `15-07`: the commit as a file the running container serves, in the same shape as ago-console's and
# ago-widget's, so smoke.sh and deploy.sh have one question to ask and one answer to parse -
# `curl https://reserve-me.ru/version.json`. A label is invisible from outside the cluster and an
# image tag is a name somebody chose; this is the copy anyone can read. Deliberately no build
# timestamp: two builds of one commit should be the same artifact, and a clock is the easiest way to
# make them differ for no reason.
RUN printf '{"app":"ago-landing","commit":"%s"}\n' "${GIT_COMMIT}" \
      > /usr/share/nginx/html/version.json
EXPOSE 80
