**WARNINGS:**

1. Need to use Deno version PRE v1.22.0
    - Deno.emit is not supported in v1.22.0
    - We will transition to v1.22.0 when we can make a stable configuration for the userland [deno_emit](https://github.com/denoland/deno_emit) module
    - To use unstable Deno v1.21.3: `deno upgrade --version 1.21.3`
3. This application uses the unstable Deno api [`Deno.emit`](https://doc.deno.land/deno/unstable@v1.21.3/~/Deno.emit)
3. `chrome` and `browser` globals are currently `any` type

# Browser-Extension-Boilerplate

Browser Extension Boilerplate using Preact and Deno

You need to download [Deno](https://deno.land/) in order to build this app.

| Commands             | What they Do                               |
| -------------------- | ------------------------------------------ |
| `make`               | bundles extension                          |
| `make chrome`        | bundles extension only for chrome          |
| `make firefox`       | bundles extension only for firefox         |
| `make watch`         | watch for js changes, and bundle on change |
| `make watch-chrome`  | watch only for chrome                      |
| `make watch-firefox` | watch only for firefox                     |
| `make test`          | run code formatter, then unit tests        |

If you have bundled using make commands, you should be able to load your
unpacked extension using a browser.
