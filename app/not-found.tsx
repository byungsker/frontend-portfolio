import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>이 페이지는<br /><em>아직 만들지 않았습니다.</em></h1>
      <Link className="button button-dark" href="/">홈으로 돌아가기 ↗</Link>
    </main>
  );
}
