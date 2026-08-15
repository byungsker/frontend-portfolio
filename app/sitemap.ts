import type { MetadataRoute } from "next";
import { projects } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    { url: baseUrl, lastModified: new Date("2026-08-15"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/resume`, lastModified: new Date("2026-08-15"), changeFrequency: "monthly", priority: 0.7 },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
