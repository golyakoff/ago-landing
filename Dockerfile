# The public landing page at reserve-me.ru's own apex - a single, self-contained static HTML file
# (no build step: no bundler, no framework, everything inline). Built directly on the VPS and
# imported into k3s's own containerd (adr/0026 in ago-root, "no registry" image delivery - the same
# mechanism ago-widget's/ago-console's own Dockerfiles use for their demo/console images).
#
# nginx's own "-alpine-slim" variant - the closest analogue to ago-chat's Chiseled-image preference
# that actually exists for nginx: official image, not a bespoke build, with the dynamic modules this
# static-file-only container never uses stripped out.
FROM nginx:1.27-alpine-slim
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
