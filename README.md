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

## Running it locally

```bash
docker build -t ago-landing:local .
docker run --rm -p 8090:80 ago-landing:local
# open http://localhost:8090
```

Or just open `index.html` directly in a browser — it has no server-side dependency at all.

## Deployment

Built and imported the same way every other static bundle in this project is — see
`ago-deploy/k8s/build-static-images.sh` and `ago-root/docs/runbooks/public-deploy.md`. Routed at the
apex `reserve-me.ru` (not a subdomain) via `ago-deploy/k8s/overlays/demo/landing-static.yaml` and the
matching `Gateway`/`HTTPRoute`/`Certificate` wiring in `ago-deploy/k8s/overlays/demo/gateway.yaml` and
`tls.yaml`.

## License

MIT — see `LICENSE`.
