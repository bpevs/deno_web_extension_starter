# Bext Boilerplate

Boilerplate to build a Deno + Preact-UI Browser Extension using
[Bext](https://github.com/bpevs/bext).

**NOTE:** BEXT BrowserAPI typing is not yet complete, so you may run into
type-check errors such as `xxx.addListener is not a method` or whatnot. I've
just been making updates as I need new methods; PRs to
[update types](https://github.com/bpevs/bext/blob/main/source/types/browser_api.ts)
are super valuable.

You need to download [Deno](https://deno.land/) in order to build this app.

| Commands                  | What they Do                               |
| ------------------------- | ------------------------------------------ |
| `deno task build`         | bundles extension                          |
| `deno task build:chrome`  | bundles extension only for chrome          |
| `deno task build:firefox` | bundles extension only for firefox         |
| `deno task test:all`      | run fmt, lint, check types, and unit tests |

If you have bundled using make commands, you should be able to load your
unpacked extension using a browser.

![Options + Popup Page](./screenshots/options.png)
