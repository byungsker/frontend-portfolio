import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
const urls = [...new Set(content.match(/https:\/\/[^"' ]+/g) ?? [])];
const failures = [];

for (const rawUrl of urls) {
  const url = rawUrl.replace(/[),]+$/, "");
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(10000), headers: { "user-agent": "frontend-portfolio-link-check/0.1.0" } });
    if (response.status === 403 || response.status === 405) {
      response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(10000), headers: { "user-agent": "frontend-portfolio-link-check/0.1.0" } });
    }
    if (response.status === 403) console.log(`${response.status} ${url} (reachable; bot protection)`);
    else if (response.status >= 400) failures.push(`${response.status} ${url}`);
    else console.log(`${response.status} ${url}`);
  } catch (error) {
    failures.push(`${url} — ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`link validation passed (${urls.length} URLs)`);
}
