import { useEffect } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { experience, labs, projects, type PortfolioProject } from "./content";

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker">{children}</p>;
}

function Header() {
  return (
    <header className="header layout-width">
      <Link className="logo" to="/" aria-label="byungsker home">
        byungsker<span>.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#experience">Experience</a>
        <a href="/#labs">Labs</a>
        <Link to="/resume">Résumé</Link>
        <a className="header-contact" href="mailto:byungsker@gmail.com">Contact <Arrow /></a>
      </nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="/#work">Work</a>
          <a href="/#experience">Experience</a>
          <a href="/#labs">Labs</a>
          <Link to="/resume">Résumé</Link>
          <a href="mailto:byungsker@gmail.com">Contact <Arrow /></a>
        </nav>
      </details>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer layout-width">
      <span>© 2026 BYUNGSKER</span>
      <span className="footer-links">
        <a href="https://github.com/byungsker" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/byungsker" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:byungsker@gmail.com">Email</a>
      </span>
    </footer>
  );
}

function ProjectMedia({ project, large = false }: { project: PortfolioProject; large?: boolean }) {
  return (
    <div className={`project-media project-media-${project.accent} ${large ? "project-media-large" : ""}`}>
      <div className="media-label">{project.number} / {project.kind}</div>
      <img src={project.image} alt={project.imageAlt} loading={large ? "eager" : "lazy"} onError={(event) => { event.currentTarget.style.opacity = "0"; }} />
      <div className="media-footer"><span>{project.title}</span><span>{project.year}</span></div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <Link className="project-card-link" to={`/projects/${project.slug}`}>
        <ProjectMedia project={project} large={featured} />
        <div className="project-card-body">
          <div className="project-card-heading">
            <div>
              <p className="card-kicker">{project.koreanTitle}</p>
              <h3>{project.title}</h3>
            </div>
            <Arrow />
          </div>
          <p>{project.summary}</p>
          <div className="tag-list">
            {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}

function HomePage() {
  useEffect(() => { document.title = "byungsker — Frontend Engineer"; }, []);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#work">Skip to content</a>
      <Header />
      <main>
        <section className="hero layout-width">
          <div className="hero-copy">
            <Kicker>Frontend engineer · Seoul, KR</Kicker>
            <h1>인터페이스를<br /><em>실제 제품으로.</em></h1>
            <p className="hero-description">사용자의 문제를 화면, 상태, 데이터 흐름으로 풀어냅니다. 직접 만들고 출시하며, 운영 중에 배운 것을 다음 제품에 반영합니다.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">대표 작업 보기 <Arrow /></a>
              <a className="under-link" href="mailto:byungsker@gmail.com">함께 이야기하기 <Arrow /></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Portfolio summary">
            <div className="hero-status"><span className="status-dot" /> Available for product-focused frontend work</div>
            <div className="hero-index">
              <span className="hero-index-number">01</span>
              <div>
                <p className="kicker">What I care about</p>
                <p>작은 팀의 모호한 문제를<br /><strong>사용 가능한 제품</strong>으로 만드는 일.</p>
              </div>
            </div>
            <div className="hero-stack">
              <span>Product</span><span>Frontend</span><span>AI UX</span>
            </div>
          </aside>
        </section>

        <div className="marquee" aria-hidden="true"><div>MAKE · SHIP · LEARN&nbsp;&nbsp;&nbsp; MAKE · SHIP · LEARN&nbsp;&nbsp;&nbsp; MAKE · SHIP · LEARN</div></div>

        <section className="section layout-width" id="work">
          <div className="section-head">
            <div><Kicker>01 / Selected work</Kicker><h2>출시하고 운영한<br /><em>작업들.</em></h2></div>
            <p>개인 제품은 아이디어보다 출시 이후가 더 많은 것을 말해준다고 믿습니다. 문제를 정의하고, 화면을 만들고, 실제 사용 앞에서 다시 고친 기록입니다.</p>
          </div>
          <div className="project-grid">
            <ProjectCard project={projects[0]} featured />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </section>

        <section className="experience-band" id="experience">
          <div className="layout-width experience-layout">
            <div className="experience-intro"><Kicker>02 / Experience</Kicker><h2>현장에서는<br /><em>다르게 배웁니다.</em></h2><p>공개할 수 있는 역할과 기술 맥락만 남겼습니다. 내부 화면이나 고객 정보가 없어도, 어떤 복잡성을 다뤘는지는 설명할 수 있습니다.</p></div>
            <div className="experience-detail">
              <div className="experience-top"><span>{experience.period}</span><span>Frontend / Product</span></div>
              <h3>{experience.label}</h3>
              <p>{experience.summary}</p>
              <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section layout-width" id="labs">
          <div className="section-head labs-head"><div><Kicker>03 / Labs & tools</Kicker><h2>작게 만든 것들이<br /><em>다음 작업이 됩니다.</em></h2></div><p>반복되는 문제를 작은 도구로 분리해보고, 다시 제품을 만들 때 재사용합니다.</p></div>
          <div className="labs-list">{labs.map((lab, index) => <a className="lab-item" href={lab.href} target="_blank" rel="noreferrer" key={lab.href}><span>0{index + 1}</span><strong>{lab.label}</strong><Arrow /></a>)}</div>
        </section>

        <section className="closing layout-width"><Kicker>Start with the problem</Kicker><h2>같이 만들<br /><em>제품이 있나요?</em></h2><a className="button button-acid" href="mailto:byungsker@gmail.com">이병우에게 연락하기 <Arrow /></a></section>
      </main>
      <Footer />
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const projectTitle = project?.title;
  useEffect(() => { document.title = projectTitle ? `${projectTitle} — byungsker` : "Not found — byungsker"; }, [projectTitle]);
  if (!project) return <Navigate to="/404" replace />;
  return (
    <div className="site-frame">
      <a className="skip-link" href="#project-content">Skip to content</a><Header />
      <main>
        <header className={`project-hero project-hero-${project.accent}`}>
          <div className="layout-width project-hero-inner"><Link className="back-link" to="/#work">← All work</Link><div className="project-hero-grid"><div><Kicker>{project.number} / {project.kind} / {project.year}</Kicker><h1>{project.title}</h1><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ProjectMedia project={project} large /></div></div>
        </header>
        <div className="layout-width project-content" id="project-content">
          <aside className="project-aside"><Kicker>Role</Kicker><strong>{project.role}</strong><div className="external-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Arrow /></a>)}</div></aside>
          <article className="case-study"><CaseSection label="Context / Problem" title="왜 만들었나"><p>{project.challenge}</p></CaseSection><CaseSection label="Build" title="무엇을 설계했나"><ul>{project.build.map((item) => <li key={item}>{item}</li>)}</ul></CaseSection><CaseSection label="Outcome" title="무엇이 남았나"><p>{project.outcome}</p></CaseSection><CaseSection label="Limits / Disclosure" title="어디까지 공개했나" muted><p>{project.limits}</p></CaseSection></article>
        </div>
      </main><Footer />
    </div>
  );
}

function CaseSection({ label, title, children, muted = false }: { label: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return <section className={`case-section ${muted ? "case-section-muted" : ""}`}><Kicker>{label}</Kicker><h2>{title}</h2>{children}</section>;
}

function ResumePage() {
  useEffect(() => { document.title = "Résumé — byungsker"; }, []);
  return <div className="site-frame"><a className="skip-link" href="#resume-content">Skip to content</a><Header /><main className="layout-width resume-page" id="resume-content"><div className="resume-heading"><Kicker>Résumé / byungsker</Kicker><h1>이병우,<br /><em>Frontend Engineer.</em></h1><p>제품의 문제를 인터페이스와 데이터 흐름으로 풀어내고, 작은 제품을 직접 출시하며 배운 것을 다음 작업에 남깁니다.</p></div><div className="resume-grid"><aside><Kicker>Contact</Kicker><p>Seoul, KR<br />Product-focused frontend work.</p><a href="mailto:byungsker@gmail.com">Email <Arrow /></a><a href="https://github.com/byungsker" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/byungsker" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></aside><div><section className="resume-section"><Kicker>Experience</Kicker><h2>{experience.label}</h2><p>{experience.summary}</p><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></section><section className="resume-section"><Kicker>Selected work</Kicker><h2>Products I shipped.</h2>{projects.map((project) => <div className="resume-project" key={project.slug}><span>{project.year}</span><div><h3>{project.title}</h3><p>{project.role} · {project.summary}</p><Link to={`/projects/${project.slug}`}>Case study <Arrow /></Link></div></div>)}</section></div></div></main><Footer /></div>;
}

function NotFoundPage() {
  return <div className="site-frame"><Header /><main className="layout-width not-found"><Kicker>404 / Not found</Kicker><h1>이 페이지는<br /><em>아직 없습니다.</em></h1><Link className="button button-dark" to="/">홈으로 돌아가기 <Arrow /></Link></main><Footer /></div>;
}

export default function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/projects/:slug" element={<ProjectPage />} /><Route path="/resume" element={<ResumePage />} /><Route path="/404" element={<NotFoundPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>;
}
