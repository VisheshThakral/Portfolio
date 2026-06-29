import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";

const ASSETS = new URL("../public/assets/", import.meta.url).pathname;

// Per-image max width caps (px). Anything not listed uses the default.
const WIDTH = {
  "clouds.png": 1024,
  "terminal.png": 1024,
  "spotlight1.png": 900,
  "spotlight2.png": 900,
  "grid1.png": 700,
  "grid2.png": 700,
  "grid3.png": 900,
  "grid4.png": 700,
};
const DEFAULT_MAX = 512;

// Unused asset — referenced nowhere in src.
const DELETE = ["tech-stack.png"];

async function run() {
  const files = (await readdir(ASSETS)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  let before = 0;
  let after = 0;

  for (const name of DELETE) {
    try {
      const p = path.join(ASSETS, name);
      before += (await stat(p)).size;
      await unlink(p);
      console.log(`deleted (unused)  ${name}`);
    } catch {}
  }

  for (const file of files) {
    if (DELETE.includes(file)) continue;
    const src = path.join(ASSETS, file);
    const out = path.join(ASSETS, file.replace(/\.(png|jpe?g)$/i, ".webp"));
    const inSize = (await stat(src)).size;

    const maxW = WIDTH[file] ?? DEFAULT_MAX;
    const img = sharp(src);
    const meta = await img.metadata();
    const resize = meta.width && meta.width > maxW ? { width: maxW } : null;

    await (resize ? img.resize(resize) : img)
      .webp({ quality: 80, effort: 6 })
      .toFile(out);

    const outSize = (await stat(out)).size;
    before += inSize;
    after += outSize;
    const pct = (100 * (1 - outSize / inSize)).toFixed(0);
    console.log(
      `${file.padEnd(22)} ${(inSize / 1024).toFixed(0).padStart(6)}KB -> ${(
        outSize / 1024
      )
        .toFixed(0)
        .padStart(6)}KB  (-${pct}%)`
    );
    await unlink(src); // remove original PNG/JPEG, keep WebP only
  }

  console.log(
    `\nTOTAL  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(
      after /
      1024 /
      1024
    ).toFixed(2)}MB`
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
