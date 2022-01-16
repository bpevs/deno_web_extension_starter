/**
 * Compile and bundle all the distributables into dist
 */
import { copySync, ensureDir } from "https://deno.land/std@0.97.0/fs/mod.ts";
import { basename, extname } from "https://deno.land/std@0.97.0/path/mod.ts";

interface BrowserManifestSettings {
  color: string;
  omits: string[];
}

interface BrowserManifests {
  [id: string]: BrowserManifestSettings;
}

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
  const distDir = `./dist/${browserId}`;

  // Copy JS/HTML/CSS/ICONS
  ensureDir(`${distDir}/static`);

  const options = { overwrite: true };
  copySync("./source/static", `${distDir}/static`, options);

  // Transform Manifest
  const manifest = JSON.parse(Deno.readTextFileSync("source/manifest.json"));
  const browserManifest = browsers[browserId];
  browserManifest.omits.forEach((omit) => delete manifest[omit]);

  Deno.writeTextFileSync(
    distDir + "/manifest.json",
    JSON.stringify(manifest, null, 2),
  );

  // Compile JS Files
  const jsFiles = await Promise.all([
    loadFile("./source/background.ts"),
    loadFile("./source/contentScript.ts"),
    loadFile("./source/options.ts"),
    loadFile("./source/popup.ts"),
  ]);

  async function loadFile(filePath: string) {
    try {
      return await Deno.emit(filePath, {
        compilerOptions: {
          noImplicitAny: false,
          lib: [
            "dom",
            "dom.iterable",
            "es6",
          ],
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  jsFiles.forEach(({ diagnostics, files }: any) => {
    for (const [sourcePath, text] of Object.entries(files)) {
      const sourceFileName = basename(sourcePath).replace(".ts", "");
      if (sourceFileName.indexOf(".map") === -1) {
        console.log(`building ${sourceFileName}...`);
      }
      Deno.writeTextFile(
        `./dist/${browserId}/${sourceFileName}`,
        text as string,
      );
    }

    if (diagnostics.length) {
      diagnostics.forEach(logDiagnosticError);
    }
  });

  const color = browserManifest.color || "";
  console.log(`Built for \x1b[1m${color}${browserId.toUpperCase()}\x1b[0m\n`);
});

interface DiagnosticError {
  category: number;
  code: number;
  start: { line: number; character: number };
  end: { line: number; character: number };
  messageText: string;
  messageChain: any;
  source: any;
  sourceLine: string;
  fileName: string;
  relatedInformation: any;
}

function logDiagnosticError(error: DiagnosticError) {
  const filteredFileName = (error.fileName || "").split("source").pop();
  console.log(
    "\x1b[1m\x1b[33m",
    `${filteredFileName} [Line ${error?.start?.line}:Column ${error?.start
      ?.character}]`,
    "\x1b[0m\n",
    error.messageText,
    "\n",
  );
}
