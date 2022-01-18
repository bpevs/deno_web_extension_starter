// https://deno.land/manual@v1.16.0/jsx_dom/jsx

const compilerOptions: Deno.CompilerOptions = {
  jsx: "react",
  jsxFactory: "h",
  jsxFragmentFactory: "Fragment",
  lib: [
    "dom",
    "dom.iterable",
    "esnext",
    "deno.ns",
  ],
  target: "es5",
};

export default compilerOptions;
