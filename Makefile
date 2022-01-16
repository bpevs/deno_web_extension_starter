build:
	deno run --unstable --allow-read --allow-write bundler.ts

watch:
	deno run --unstable --watch --allow-read --allow-write bundler.ts

firefox:
	deno run --unstable --allow-read --allow-write bundler.ts firefox

chromium:
	deno run --unstable --allow-read --allow-write bundler.ts chromium

test:
	deno fmt
	deno test
