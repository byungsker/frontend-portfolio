export type ExternalLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slug: string;
  number: string;
  kind: string;
  year: string;
  title: string;
  koreanTitle: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  accent: "mint" | "coral" | "blue";
  image: string;
  imageAlt: string;
  challenge: string;
  build: string[];
  outcome: string;
  limits: string;
  links: ExternalLink[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "bookgolas",
    number: "01",
    kind: "PERSONAL PRODUCT",
    year: "2026",
    title: "Bookgolas",
    koreanTitle: "AI 독서 관리",
    summary: "읽은 책이 다음 행동으로 이어지게.",
    description:
      "읽기 기록을 쌓는 데서 멈추지 않고, 다시 읽고 실천할 문장까지 남기게 만드는 iOS 독서 관리 앱입니다.",
    role: "제품 설계 · 앱 개발 · 출시",
    stack: ["Flutter", "Supabase", "Aladin API"],
    accent: "mint",
    image: "https://book-golas.vercel.app/icon.png?icon.3nppdb3iwl20x.png",
    imageAlt: "Bookgolas 앱 아이콘",
    challenge:
      "독서 기록 앱은 입력은 쉽게 시작하지만, 시간이 지나면 기록과 행동의 연결이 끊기기 쉽습니다.",
    build: [
      "책 검색과 독서 기록을 한 흐름으로 묶고",
      "목표·진행률·메모를 다시 확인할 수 있는 구조를 설계하고",
      "AI Recall과 통계 화면으로 기록을 회고 가능한 데이터로 만들었습니다.",
    ],
    outcome:
      "개인 문제를 직접 정의하고, 제품의 첫 버전을 설계·구현해 App Store에 출시했습니다.",
    limits:
      "공개 페이지에서 확인 가능한 기능과 출시 정보만 기록하며, 사용량·전환율 같은 내부 수치는 공개하지 않습니다.",
    links: [
      { label: "서비스 보기", href: "https://book-golas.vercel.app/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/bookgolas-ai-%EB%8F%85%EC%84%9C-%EA%B4%80%EB%A6%AC/id6757021809",
      },
    ],
  },
  {
    slug: "baroguni",
    number: "02",
    kind: "PERSONAL PRODUCT",
    year: "2026",
    title: "바로구니",
    koreanTitle: "같이 담고, 같이 아끼는 장보기",
    summary: "장바구니를 공유하면 비교가 빨라진다.",
    description:
      "여러 사람이 함께 장을 볼 때 생기는 중복 구매와 가격 비교의 번거로움을 한 장바구니 안에서 줄이는 앱입니다.",
    role: "제품 설계 · 앱 개발 · 출시",
    stack: ["Flutter", "Realtime", "OCR"],
    accent: "coral",
    image: "https://baroguni.vercel.app/opengraph-image?e601589b54b791c6",
    imageAlt: "바로구니 서비스 소개 이미지",
    challenge:
      "공유 장보기는 상품을 담는 순간보다, 서로의 상태와 가격 정보를 맞추는 순간에 더 많은 마찰이 생깁니다.",
    build: [
      "실시간 공유 장바구니와 활동 흐름을 설계하고",
      "영수증 스캔으로 이미 산 상품을 다시 담는 일을 줄이고",
      "온라인 가격 비교와 알림으로 구매 직전의 판단을 돕습니다.",
    ],
    outcome:
      "공유 상태·영수증·가격 정보라는 서로 다른 데이터를 하나의 장보기 흐름으로 엮어 출시했습니다.",
    limits:
      "공개 App Store 설명에 확인되는 기능을 중심으로 서술하고, 사용자 수나 절감액은 주장하지 않습니다.",
    links: [
      { label: "서비스 보기", href: "https://baroguni.vercel.app/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%EB%B0%94%EB%A1%9C%EA%B5%AC%EB%8B%88/id6759001341",
      },
    ],
  },
  {
    slug: "byungskerlog",
    number: "03",
    kind: "OPEN PRODUCT",
    year: "2025—",
    title: "byungskerlog",
    koreanTitle: "생각을 발행 가능한 기록으로",
    summary: "메모를 지식과 글의 재료로 바꾸는 작업실.",
    description:
      "흩어진 메모를 저장하고, 다시 찾고, AI의 도움을 받아 공개 가능한 글로 발전시키는 개인 지식·콘텐츠 워크스페이스입니다.",
    role: "제품 방향 · 프론트엔드 · 데이터 흐름",
    stack: ["Next.js", "TypeScript", "Prisma", "Vercel AI SDK"],
    accent: "blue",
    image: "https://byungskerlog.com/opengraph-image?cf8b500896998147",
    imageAlt: "byungskerlog 서비스 소개 이미지",
    challenge:
      "기록 도구는 쌓이는 속도보다 다시 꺼내 쓰는 흐름이 중요합니다. 입력·검색·편집·발행이 끊기면 지식은 다시 고립됩니다.",
    build: [
      "Knowledge Preset과 콘텐츠 타입으로 기록의 맥락을 구조화하고",
      "자동 저장과 검색·필터 흐름으로 긴 편집 작업을 안정화하고",
      "AI 변환과 API 오류·레이트 리밋을 제품 경험 안에서 다뤘습니다.",
    ],
    outcome:
      "제품 안에서 실제로 쓰이는 기록·변환 흐름을 운영하며, 프론트엔드가 데이터 모델과 작업 경험을 함께 설계하게 만들었습니다.",
    limits:
      "AI가 생성한 코드와 직접 설계·구현한 영역을 구분해 설명하며, 저장소에 공개된 범위 이상의 운영 수치는 제시하지 않습니다.",
    links: [
      { label: "서비스 보기", href: "https://byungskerlog.com/" },
      { label: "GitHub", href: "https://github.com/byungsker/byungskerlog" },
    ],
  },
];

export const experience = {
  label: "모빌리티 UX 웹앱 기반 키오스크",
  period: "2023—2025",
  summary:
    "현장 장비와 웹 인터페이스가 만나는 제품에서, 다중 화면 상태와 데이터 흐름을 안정적으로 연결했습니다.",
  points: [
    "키오스크 환경의 화면 상태와 사용자 흐름을 컴포넌트 단위로 구현",
    "다중 디스플레이 통신과 브라우저 저장소를 사용해 현장 상태를 동기화",
    "테스트와 목 데이터로 하드웨어에 의존하지 않는 개발·검증 루프를 구성",
  ],
};

export const labs: ExternalLink[] = [
  { label: "JSON Animation Viewer", href: "https://json-animation-viewer.vercel.app/" },
  { label: "figmable", href: "https://www.npmjs.com/package/figmable" },
  { label: "bridge-zip", href: "https://www.npmjs.com/package/bridge-zip" },
  { label: "markyfy", href: "https://www.npmjs.com/package/markyfy" },
];
