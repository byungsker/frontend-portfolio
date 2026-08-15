import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — byungsker`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — byungsker`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="project-detail-page" id="main-content">
      <a className="skip-link" href="#project-content">본문으로 이동</a>
      <nav className="site-nav shell" aria-label="주요 탐색">
        <Link className="wordmark" href="/">byungsker<span>.</span></Link>
        <Link className="back-link" href="/#work">← All work</Link>
      </nav>
      <header className={`detail-hero shell detail-${project.accent}`}>
        <div className="detail-meta">
          <span>{project.number} / {project.kind}</span>
          <span>{project.year}</span>
        </div>
        <p className="eyebrow">{project.koreanTitle}</p>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.description}</p>
        <div className="detail-tags">
          {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </header>

      <div className="shell detail-body" id="project-content">
        <aside className="detail-aside">
          <span className="eyebrow">ROLE</span>
          <strong>{project.role}</strong>
          <div className="detail-links">
            {project.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>
        <article className="detail-copy">
          <section>
            <p className="eyebrow">CONTEXT / PROBLEM</p>
            <h2>왜 만들었나</h2>
            <p>{project.challenge}</p>
          </section>
          <section>
            <p className="eyebrow">BUILD</p>
            <h2>무엇을 설계했나</h2>
            <ul>
              {project.build.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <p className="eyebrow">OUTCOME</p>
            <h2>무엇이 남았나</h2>
            <p>{project.outcome}</p>
          </section>
          <section className="detail-limits">
            <p className="eyebrow">LIMITS / DISCLOSURE</p>
            <p>{project.limits}</p>
          </section>
        </article>
      </div>
      <footer className="site-footer shell">
        <span>© 2026 BYUNGSKER</span>
        <Link href="/#work">BACK TO WORK ↑</Link>
      </footer>
    </main>
  );
}
