import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
const required = ["bookgolas", "baroguni", "byungskerlog", "json-animation-viewer.vercel.app", "figmable", "bridge-zip", "markyfy"];
const forbidden = ["HStudio", "customer", "facility", "internal metric", "private screenshot"];

for (const token of required) {
  if (!content.toLowerCase().includes(token.toLowerCase())) throw new Error(`Missing public content token: ${token}`);
}
for (const token of forbidden) {
  if (content.toLowerCase().includes(token.toLowerCase())) throw new Error(`Forbidden disclosure token found: ${token}`);
}
if (!content.includes("모빌리티 UX 웹앱 기반 키오스크")) throw new Error("Canonical public experience label is missing");
console.log("content validation passed");
