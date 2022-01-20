> **WARNINGS:**
> 1. **This application uses the unstable Deno api [`Deno.emit`](https://doc.deno.land/deno/unstable@v1.17.1/~/Deno.emit)**.
>     - If you are worried about stability of this format, do not use it yet.
> 2. **This repo is currently using [Manifest V2](https://developer.chrome.com/docs/extensions/mv2/).**
>     - Manifest V3 is not yet integrated.
>     - Your new extension using this template will likely not be accepted by Chrome Store without updates.
> 3. **Type for `chrome` and `global` are not yet integrated.**
>     - Your usage of extension apis will not be typechecked.

# Browser-Extension-Boilerplate

Browser Extension Boilerplate using Preact and Deno

You need to download [Deno](https://deno.land/) in order to build this app.

| Commands        | What they Do                               |
| --------------- | ------------------------------------------ |
| `make`          | bundles extension                          |
| `make chromium` | bundles extension                          |
| `make firefox`  | bundles extension                          |
| `make watch`    | watch for js changes, and bundle on change |
| `make test`     | run code formatter, then unit tests        |

If you have bundled using make commands, you should be able to load your unpacked extension using a browser.
