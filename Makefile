build:
	deno run --unstable --allow-net --allow-read --allow-write bundler.ts

chromium:
	deno run --unstable --allow-net --allow-read --allow-write bundler.ts chromium

firefox:
	deno run --unstable --allow-net --allow-read --allow-write bundler.ts firefox

watch:
	deno run --unstable --watch --allow-net --allow-read --allow-write bundler.ts

watch-chromium:
	deno run --unstable --watch --allow-net --allow-read --allow-write bundler.ts chromium

watch-firefox:
	deno run --unstable --watch --allow-net --allow-read --allow-write bundler.ts firefox

test:
	deno fmt
	deno test
