# AGO Landing

The public marketing page for **AGO Chat**, served at the apex of `reserve-me.ru`. A single,
self-contained static HTML file — no build step, no framework, no bundler — because there is nothing
here that needs one: one page, inline CSS, a small inline script for the bilingual (RU default / EN)
toggle.

This repository exists on its own, separate from `ago-widget`/`ago-console`/`ago-chat`, because it
isn't any one of those products — it's the front door to the whole thing, and none of the existing
repos are the right home for a platform-wide marketing page
(`ago-root/docs/architecture/repositories.md`).

## What's here

- `index.html` — the whole site.
- `Dockerfile` — packages it behind a minimal `nginx:1.27-alpine-slim`, matching the same
  no-build-step static-file pattern `ago-widget`'s and `ago-console`'s own demo/console images use.
- `.github/workflows/ci.yml` — builds the image on every pull request and publishes it from `main`.

## Running it locally

```bash
docker build -t ago-landing:local .
docker run --rm -p 8090:80 ago-landing:local
# open http://localhost:8090
```

Or just open `index.html` directly in a browser — it has no server-side dependency at all.

## Deployment

CI publishes `ghcr.io/golyakoff/ago-landing:<40-char commit SHA>` on every push to `main`, using the
workflow's own `GITHUB_TOKEN` and no other secret (`ago-root/docs/adr/0047-*`, `15-07`). Deploy it
with `./deploy.sh landing <sha>` from `ago-deploy/k8s` on the node;
`ago-deploy/k8s/build-static-images.sh` can still build the same name there for a hotfix, which is
now the fallback rather than the mechanism.

Routed at the apex `reserve-me.ru` (not a subdomain) via
`ago-deploy/k8s/overlays/demo/landing-static.yaml` and the matching `Gateway`/`HTTPRoute`/
`Certificate` wiring in `ago-deploy/k8s/overlays/demo/gateway.yaml` and `tls.yaml`.

The image serves `/version.json` — `{"app":"ago-landing","commit":"<sha>"}` — so
`curl https://reserve-me.ru/version.json` names the deployed commit without cluster access
(`ago-root/docs/adr/0051-*`). This page takes no build-time configuration at all, which is why its
SHA tag means one thing with no effort: there is no environment for the image to have been pointed
at.

## License

MIT — see `LICENSE`.
