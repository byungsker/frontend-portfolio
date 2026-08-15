import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = (process.env.SITE_URL || "http://localhost:5173").replace(/\/$/, "");
const routes = [
  "/",
  "/resume",
  "/projects/bookgolas",
  "/projects/baroguni",
  "/projects/byungskerlog",
];

const distDirectory = resolve("dist");
await mkdir(distDirectory, { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`;

await Promise.all([
  writeFile(resolve(distDirectory, "sitemap.xml"), sitemap),
  writeFile(resolve(distDirectory, "robots.txt"), robots),
]);

console.log(`SEO artifacts generated for ${siteUrl}`);
