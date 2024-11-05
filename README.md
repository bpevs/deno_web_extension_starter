note: I built [Bext](https://github.com/bpevs/bext) to make it easier to apply the concepts developed in this repo, so I recommend using that. Since this repo is basically a naive version of bext, and I don't really want to put in the effort to keep it up-to-date with that, I'm going to archive it.

# Deno WebExtension Boilerplate

Boilerplate to build a Deno + Preact-UI Browser Extension. Basically, `built.ts`
uses esbuild to build js into the `dist` dir, and updates manifest stuff for v2
(ff) and v3 (chrome).

You need to download [Deno](https://deno.land/) in order to build this app.

| Commands                  | What they Do      |
| ------------------------- | ----------------- |
| `deno run -A build.ts`    | bundles extension |
| `deno run -A build.ts -w` | watch extension   |

If you have bundled using make commands, you should be able to load your
unpacked extension using a browser.

![Options + Popup Page](./screenshots/options.png)
