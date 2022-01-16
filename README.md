# Browser-Extension-Boilerplate

Browser Extension Boilerplate using Preact and Deno

You need to download [Deno](https://deno.land/) in order to build this app.

This application uses the unstable Deno api
[`Deno.emit`](https://doc.deno.land/deno/unstable@v1.17.1/~/Deno.emit)

| Commands     | What they Do                               |
| ------------ | ------------------------------------------ |
| `make`       | bundles extension                          |
| `make chromium`       | bundles extension                          |
| `make firefox`       | bundles extension                          |
| `make watch` | watch for js changes, and bundle on change |
| `make test`  | run code formatter, then unit tests        |
