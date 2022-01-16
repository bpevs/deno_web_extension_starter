build:
	deno run --unstable --allow-read --allow-write bundler.ts

watch:
	deno run --unstable --watch --allow-read --allow-write bundler.ts

test:
	deno fmt
	deno test
