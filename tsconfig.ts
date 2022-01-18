// https://deno.land/manual@v1.16.0/jsx_dom/jsx

const compilerOptions: Deno.CompilerOptions = {
  jsx: "react",
  // jsx: "react-jsx"
  // jsxImportSource: "https://esm.sh/preact",
  jsxFactory: "h",
  jsxFragmentFactory: "Fragment",
  lib: [
    "dom",
    "dom.iterable",
    "esnext",
    "deno.ns"
  ],
  target: "es5",
  types: [
    "./types/jsx.d.ts",
    "./types/preact.d.ts",
  ]
};

export default compilerOptions
