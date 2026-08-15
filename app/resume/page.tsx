import type { Metadata } from "next";
import Link from "next/link";
import { experience, projects } from "../content";

export const metadata: Metadata = {
  title: "Résumé — byungsker",
  description: "프론트엔드 엔지니어 이병우의 제품·프론트엔드·운영 경험 요약.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="resume-page" id="main-content">
      <a className="skip-link" href="#resume-content">본문으로 이동</a>
      <nav className="site-nav shell" aria-label="주요 탐색">
        <Link className="wordmark" href="/">byungsker<span>.</span></Link>
        <Link className="back-link" href="/">← Home</Link>
      </nav>
      <header className="resume-hero shell">
        <p className="eyebrow">RÉSUMÉ / BYUNGSKER</p>
        <h1>이병우,<br /><em>Frontend Engineer.</em></h1>
        <p>제품의 문제를 인터페이스와 데이터 흐름으로 풀어내고, 작은 제품을 직접 출시하며 배운 것을 다음 작업에 남깁니다.</p>
      </header>
      <div className="resume-layout shell" id="resume-content">
        <aside className="resume-aside">
          <p className="eyebrow">CONTACT</p>
          <p>Seoul, KR<br />Open to product-focused frontend work.</p>
          <a href="mailto:byungsker@gmail.com">EMAIL ↗</a>
          <a href="https://github.com/byungsker" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="https://www.linkedin.com/in/byungsker" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        </aside>
        <div className="resume-main">
          <section className="resume-section">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>{experience.label}</h2>
            <p>{experience.summary}</p>
            <ul className="experience-card-list">
              {experience.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </section>
          <section className="resume-section">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Products I shipped.</h2>
            {projects.map((project) => (
              <div className="resume-project" key={project.slug}>
                <span>{project.year}</span>
                <div>
                  <h3>{project.title} · {project.koreanTitle}</h3>
                  <p>{project.role}. {project.summary}</p>
                  <Link href={`/projects/${project.slug}`}>CASE STUDY ↗</Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <footer className="site-footer shell">
        <span>© 2026 BYUNGSKER</span>
        <Link href="/">BACK TO HOME ↑</Link>
      </footer>
    </main>
  );
}
