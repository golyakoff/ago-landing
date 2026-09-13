# AGO Landing

The public marketing page for **AGO Chat**, served at the apex of `reserve-me.ru`. Static HTML — no
build step, no framework, no bundler — because there is nothing here that needs one: two pages, one
stylesheet, one script for the bilingual (RU default / EN) toggle.

It was a *single* self-contained file until pricing needed a page of its own. The stylesheet and the
dictionary moved out of `index.html` at that point rather than being copied into the second page,
which would have started drifting the first time either page was edited alone. Nothing else changed:
still no build step, still openable straight off disk.

This repository exists on its own, separate from `ago-widget`/`ago-console`/`ago-chat`, because it
isn't any one of those products — it's the front door to the whole thing, and none of the existing
repos are the right home for a platform-wide marketing page
(`ago-root/docs/architecture/repositories.md`).

## What's here

- `index.html` — the landing page itself.
- `pricing.html` — the full price list, served at `/pricing` as well as `/pricing.html`.
- `styles.css` — the design system, shared by both pages.
- `i18n.js` — the RU/EN dictionary, the language switch, and the price rendering, shared by both.
- `prices.json` — **optional, and absent from this repository most of the time.** See below.
- `Dockerfile` — packages it behind a minimal `nginx:1.31-alpine-slim`, matching the same
  no-build-step static-file pattern `ago-widget`'s and `ago-console`'s own demo/console images use.
- `.github/workflows/ci.yml` — builds the image on every pull request and publishes it from `main`.

## Prices

Neither page stores a price. Both read `prices.json` at runtime — a plain, same-origin static file,
no endpoint and no live database read from a public page — and render each figure in one of exactly
two states: the real published amount, or an honest "no published price". A priced resource that
exists in the product but has never had a version published (`admin-extra`, today) is correctly
*absent* from the file rather than present as zero, and lands in the second state on its own.

That file is written by `ago-chat`'s own `tools/update-landing-prices-from-db.sh`, which snapshots
every currently-published price and opens a pull request here when one changes
(`ago-chat/docs/runbooks/landing-prices.md`). It is not committed by hand, and its `COPY` into the
image is deliberately optional, so both pages build and read correctly before that script has ever
run — which is the state this repository starts in.

## Running it locally

```bash
docker build -t ago-landing:local .
docker run --rm -p 8090:80 ago-landing:local
# open http://localhost:8090
```

Or just open `index.html` directly in a browser — it has no server-side dependency at all. One
difference off `file://`: the `prices.json` fetch is blocked there by the browser's own origin rules,
so every figure renders as "no published price". That is the same path a missing file already takes,
which is why it degrades instead of breaking — but run it in the container above if the prices are
what you are checking.

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
