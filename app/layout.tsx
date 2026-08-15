import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "byungsker — Frontend Engineer",
  description: "제품의 문제를 인터페이스와 데이터 흐름으로 풀어내는 프론트엔드 개발자 이병우의 작업 기록.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "byungsker — Frontend Engineer",
    description: "제품의 문제를 인터페이스와 데이터 흐름으로 풀어내는 프론트엔드 개발자 이병우의 작업 기록.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
