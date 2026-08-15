import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const roots = [new URL("../src/", import.meta.url), new URL("../public/", import.meta.url)];
const forbidden = [
  /HStudio/i,
  /-----BEGIN (?:RSA|OPENSSH|EC|PGP) PRIVATE KEY-----/,
  /(?:sk|rk)-[A-Za-z0-9_-]{20,}/,
  /gh[pousr]_[A-Za-z0-9_]{20,}/,
  /AKIA[0-9A-Z]{16}/,
];

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory.pathname, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(new URL(`file://${path}/`)));
    else files.push(path);
  }
  return files;
}

const files = (await Promise.all(roots.map(filesIn))).flat();
const failures = [];
for (const file of files) {
  const body = await readFile(file, "utf8");
  for (const pattern of forbidden) if (pattern.test(body)) failures.push(`${file}: ${pattern}`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`public safety scan passed (${files.length} files)`);
}
