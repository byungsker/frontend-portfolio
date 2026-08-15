import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/content.ts", import.meta.url), "utf8");

test("keeps the three selected projects in the public content model", () => {
  for (const slug of ["bookgolas", "baroguni", "byungskerlog"]) {
    assert.match(source, new RegExp(`slug: "${slug}"`));
  }
});

test("keeps the public disclosure boundary in the content model", () => {
  assert.match(source, /모빌리티 UX 웹앱 기반 키오스크/);
  assert.doesNotMatch(source, /HStudio/);
  assert.doesNotMatch(source, /customer|facility|private screenshot/i);
});
