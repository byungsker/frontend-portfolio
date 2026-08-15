import type { Metadata } from "next";
import Link from "next/link";
import { experience, labs, projects } from "./content";

export const metadata: Metadata = {
  title: "byungsker — Frontend Engineer",
  description:
    "제품의 문제를 인터페이스와 데이터 흐름으로 풀어내는 프론트엔드 개발자 이병우의 작업 기록.",
  openGraph: {
    title: "byungsker — Frontend Engineer",
    description: "제품의 문제를 인터페이스와 데이터 흐름으로 풀어냅니다.",
    type: "website",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav shell" aria-label="주요 탐색">
        <Link className="wordmark" href="/" aria-label="홈으로 이동">
          byungsker<span>.</span>
        </Link>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#labs">Labs</a>
          <a className="nav-contact" href="mailto:byungsker@gmail.com">
            Contact <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND ENGINEER · SEOUL, KR</p>
          <h1 id="hero-title">
            Product thinking,
            <br />
            <em>in the browser.</em>
          </h1>
          <p className="hero-lede">
            제품의 문제를 인터페이스와 데이터 흐름으로 풀어냅니다.
            <br />
            직접 만들고, 운영하고, 다시 고칩니다.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              대표 작업 보기 <Arrow />
            </a>
            <a className="text-link" href="mailto:byungsker@gmail.com">
              함께 이야기하기 <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-label="Interface, product, and systems">
          <div className="mark-orbit mark-orbit-one" />
          <div className="mark-orbit mark-orbit-two" />
          <div className="mark-core">
            <span>UI</span>
            <strong>+</strong>
            <span>DATA</span>
          </div>
          <p className="mark-caption">MAKE / SHIP / LEARN</p>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Small teams, ambiguous problems, shipped interfaces.</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="작업 방식">
        <div className="shell signal-grid">
          <span>SELECTED WORK</span>
          <span>PRODUCT × FRONTEND × OPERATIONS</span>
          <span>LAST UPDATED / 2026.08</span>
        </div>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">직접 만든 제품들</h2>
          <p>
            아이디어를 화면으로 옮기는 데서 끝내지 않고, 출시와 사용의 맥락까지
            연결한 작업입니다.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-card-${project.accent}`} key={project.slug}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-kind">{project.kind}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-window">
                  <div className="visual-bar"><i /><i /><i /></div>
                  <div className="visual-lines"><b /><b /><b /></div>
                  <div className="visual-block"><span>{project.number}</span></div>
                </div>
              </div>
              <div className="project-card-copy">
                <p className="project-korean-title">{project.koreanTitle}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list" aria-label={`${project.title} 기술 스택`}>
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link className="card-link" href={`/projects/${project.slug}`}>
                  프로젝트 읽기 <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="shell experience-layout">
          <div className="section-heading compact-heading">
            <p className="eyebrow">02 / EXPERIENCE</p>
            <h2 id="experience-title">현장에서 배운 것</h2>
          </div>
          <article className="experience-card">
            <div className="experience-meta">
              <span>{experience.period}</span>
              <span>FRONTEND / PRODUCT</span>
            </div>
            <h3>{experience.label}</h3>
            <p className="experience-summary">{experience.summary}</p>
            <ul>
              {experience.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <p className="privacy-note">공개 가능한 역할과 기술 맥락만 기록했습니다.</p>
          </article>
        </div>
      </section>

      <section className="section shell labs-section" id="labs" aria-labelledby="labs-title">
        <div className="labs-intro">
          <p className="eyebrow">03 / LABS & TOOLS</p>
          <h2 id="labs-title">작게 만들고,<br /><em>다음 작업에 남깁니다.</em></h2>
        </div>
        <div className="labs-list">
          {labs.map((lab, index) => (
            <a className="lab-row" href={lab.href} key={lab.href} target="_blank" rel="noreferrer">
              <span>0{index + 1}</span>
              <strong>{lab.label}</strong>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="closing shell" aria-labelledby="closing-title">
        <p className="eyebrow">A GOOD INTERFACE IS A DECISION</p>
        <h2 id="closing-title">무엇을 만들지보다,<br /><em>왜 만드는지부터.</em></h2>
        <a className="button button-acid" href="mailto:byungsker@gmail.com">
          안녕하세요, 이병우입니다 <Arrow />
        </a>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 BYUNGSKER</span>
        <span>BUILT WITH CURIOSITY & CODE</span>
        <a href="mailto:byungsker@gmail.com">EMAIL <Arrow /></a>
      </footer>
    </main>
  );
}
