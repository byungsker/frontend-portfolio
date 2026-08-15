import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>byungsker — Frontend Engineer<\/title>/i);
  assert.match(html, /Bookgolas/);
  assert.match(html, /바로구니/);
  assert.match(html, /모빌리티 UX 웹앱 기반 키오스크/);
  assert.doesNotMatch(html, /HStudio/);
});

test("server-renders a project detail route", async () => {
  const response = await render("/projects/bookgolas");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Bookgolas — byungsker<\/title>/i);
  assert.match(html, /CONTEXT \/ PROBLEM/);
  assert.match(html, /App Store/);
  assert.doesNotMatch(html, /HStudio/);
});
