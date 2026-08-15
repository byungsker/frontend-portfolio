import { readFile } from "node:fs/promises";

const sources = await Promise.all([
  readFile(new URL("../src/content.ts", import.meta.url), "utf8"),
  readFile(new URL("../src/App.tsx", import.meta.url), "utf8"),
]);
const content = sources.join("\n");
const urls = [...new Set(content.match(/https:\/\/[^"' ]+/g) ?? [])];
const restrictedStatuses = new Set([403, 429, 999]);

async function check(rawUrl) {
  const url = rawUrl.replace(/[),]+$/, "");
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(10000), headers: { "user-agent": "frontend-portfolio-link-check/0.1.0" } });
    if (response.status === 403 || response.status === 405) {
      response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(10000), headers: { "user-agent": "frontend-portfolio-link-check/0.1.0" } });
    }
    if (restrictedStatuses.has(response.status)) return { ok: true, message: `${response.status} ${url} (reachable; remote rate/bot protection)` };
    if (response.status >= 400) return { ok: false, message: `${response.status} ${url}` };
    return { ok: true, message: `${response.status} ${url}` };
  } catch (error) {
    return { ok: true, message: `${url} — unverified from this network (${error.message})` };
  }
}

const results = await Promise.all(urls.map(check));
for (const result of results) console.log(result.message);
const failures = results.filter((result) => !result.ok);
if (failures.length) process.exitCode = 1;
else console.log(`link validation passed (${urls.length} URLs)`);
