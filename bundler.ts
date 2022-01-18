/**
 * Compile and bundle all the distributables into dist
 */
import { copySync, ensureDir } from "https://deno.land/std@0.97.0/fs/mod.ts";
import { basename, extname } from "https://deno.land/std@0.97.0/path/mod.ts";
import compilerOptions from './tsconfig.ts';

interface BrowserManifestSettings {
  color: string;
  omits: string[];
}

interface BrowserManifests {
  [id: string]: BrowserManifestSettings;
}

const emitOptions: Deno.EmitOptions = {
  bundle: "classic",
  importMapPath: "./import_map.json",
  compilerOptions,
};

const browsers: BrowserManifests = {
  chromium: {
    color: "\x1b[32m",
    omits: ["applications", "options_ui"],
  },
  firefox: {
    color: "\x1b[91m",
    omits: ["options_page"],
  },
};

if (Deno.args[0] === "chromium") delete browsers.firefox;
if (Deno.args[0] === "firefox") delete browsers.chromium;

console.log("\x1b[37mPackager\n========\x1b[0m");

Object.keys(browsers).forEach(async (browserId) => {
  const distDir = `dist/${browserId}`;

  // Copy JS/HTML/CSS/ICONS
  ensureDir(`${distDir}/static`);

  const options = { overwrite: true };
  copySync("source/static", distDir, options);

  // Transform Manifest
  const manifest = JSON.parse(Deno.readTextFileSync("source/manifest.json"));
  const browserManifest = browsers[browserId];
  browserManifest.omits.forEach((omit) => delete manifest[omit]);

  Deno.writeTextFileSync(
    distDir + "/manifest.json",
    JSON.stringify(manifest, null, 2),
  );

  const color = browserManifest.color || "";
  console.log(`Builing for \x1b[1m${color}${browserId.toUpperCase()}\x1b[0m\n`);

  const jsFiles = await Promise.all([
    loadFile("background.ts"),
    loadFile("options.tsx"),
    loadFile("contentScript.ts"),
    loadFile("popup.ts"),
  ]);

  jsFiles.forEach(({ name, emitResult }) => {
    const { diagnostics, files } = emitResult;
    const bundleCode: string = files["deno:///bundle.js"];
    const outputFileName = name.replace(/(t|j)sx?$/, "js");
    const outputPath = `dist/${browserId}/${outputFileName}`;

    console.info(`%c building ${name} > ${outputPath}...`, "color: #bada55");

    if (diagnostics.length) {
      console.warn(Deno.formatDiagnostics(diagnostics));
    }

    Deno.writeTextFile(outputPath, bundleCode);
  });

  console.log(
    `Complete for \x1b[1m${color}${browserId.toUpperCase()}\x1b[0m\n`,
  );
});

async function loadFile(name: string) {
  const filePath = `source/${name}`;
  const emitResult = await Deno.emit(filePath, emitOptions);
  return { name, emitResult };
}
