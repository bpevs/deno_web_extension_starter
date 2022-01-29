> **WARNINGS:**
>
> 1. **This application uses the unstable Deno api
   > [`Deno.emit`](https://doc.deno.land/deno/unstable@v1.17.1/~/Deno.emit)**
> 2. **`chrome` and `browser` globals are currently `any` type**

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
