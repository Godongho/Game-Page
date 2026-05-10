/**
 * 다국어 번역 데이터 파일
 * 한국어(ko), 영어(en), 일본어(ja) 지원
 * 
 * 새로운 텍스트를 추가할 때 3개 언어 모두 작성해주세요.
 */

export type Language = "ko" | "en" | "ja";

export const TRANSLATIONS = {
  // ============================================
  // 헤더 네비게이션
  // ============================================
  nav: {
    studio: { ko: "스튜디오", en: "STUDIO", ja: "スタジオ" },
    work: { ko: "작업", en: "WORK", ja: "作品" },
    services: { ko: "서비스", en: "SERVICES", ja: "サービス" },
    contact: { ko: "연락처", en: "CONTACT", ja: "お問合せ" },
  },

  // ============================================
  // 히어로 섹션
  // ============================================
  hero: {
    contactBtn: { ko: "문의하기", en: "CONTACT US", ja: "お問い合わせ" },
    badgeText1: { ko: "문의하기", en: "GET IN TOUCH", ja: "お問い合わせ" },
    badgeText2: { ko: "스튜디오 파도", en: "STUDIO PADO", ja: "スタジオ パド" },
  },

  // ============================================
  // OUR PROJECT 섹션 (포트폴리오 슬라이더)
  // ============================================
  projectSection: {
    subTitle: { ko: "우리의 선택", en: "OUR SELECTION", ja: "セレクション" },
    mainTitleLeft: { ko: "OUR", en: "OUR", ja: "OUR" },
    mainTitleRight: { ko: "PROJECT", en: "PROJECT", ja: "PROJECT" },
    servicesProvided: { ko: "제공 서비스:", en: "SERVICES PROVIDED:", ja: "提供サービス:" },
  },

  // ============================================
  // 프로젝트 카드 데이터
  // ============================================
  projectCards: [
    {
      quote: {
        ko: "\"CINDER CITY의 Level Design과 Content Design을 담당\"",
        en: "\"Responsible for Level Design and Content Design of CINDER CITY\"",
        ja: "\"CINDER CITYのレベルデザインとコンテンツデザインを担当\"",
      },
      category: {
        ko: "컨텐츠 디자인 & 레벨 디자인",
        en: "CONTENT DESIGN & LEVEL DESIGN",
        ja: "コンテンツデザイン & レベルデザイン",
      },
    },
  ],

  // ============================================
  // OUR PORTFOLIO 섹션 (개인 포트폴리오 리스트)
  // ============================================
  portfolioSection: {
    mainTitleLeft: { ko: "OUR", en: "OUR", ja: "OUR" },
    mainTitleRight: { ko: "PORTFOLIO", en: "PORTFOLIO", ja: "PORTFOLIO" },
    more: { ko: "더보기", en: "MORE", ja: "詳細" },
  },

  // 포트폴리오 카테고리
  portfolioCategories: [
    {
      title: { ko: "3D 레벨 디자인", en: "3D LEVEL DESIGN", ja: "3Dレベルデザイン" },
      tags: [
        { ko: "레벨 디자인 블록아웃", en: "LEVEL DESIGN BLOCKOUT", ja: "レベルデザイン ブロックアウト" },
        { ko: "스팀펑크 어드벤처", en: "STEAMPUNK Adventure", ja: "スチームパンク アドベンチャー" },
        { ko: "3인칭 슈터", en: "Third-Person Shooter", ja: "サードパーソンシューター" },
      ],
    },
    {
      title: { ko: "3D 아트", en: "3D-ART", ja: "3Dアート" },
      tags: [
        { ko: "리얼리스틱 3D 시네마틱", en: "REALISTIC 3D Cinematic", ja: "リアリスティック 3D シネマティック" },
        { ko: "", en: "", ja: "" },
        { ko: "", en: "", ja: "" },
      ],
    },
    {
      title: { ko: "3D 캐릭터", en: "3D CHARACTERS", ja: "3Dキャラクター" },
      tags: [
        { ko: "리얼리스틱 3D 캐릭터", en: "REALISTIC 3D CHARACTERS", ja: "リアリスティック 3D キャラクター" },
        { ko: "스타일라이즈드 3D 캐릭터", en: "STYLIZED 3D CHARACTERS", ja: "スタイライズド 3D キャラクター" },
      ],
    },
  ],

  // ============================================
  // 스튜디오 섹션
  // ============================================
  studio: {
    label: { ko: "소개", en: "About Us", ja: "会社概要" },
    heading: {
      ko: "경계를 넘어서는 디지털 아트를 창작합니다",
      en: "We create digital art that pushes boundaries",
      ja: "境界を超えるデジタルアートを創造します",
    },
    desc1: {
      ko: "Studio PADO는 뛰어난 시각적 경험을 만드는 프리미어 게임 아트 아웃소싱 스튜디오입니다. 전 세계 게임 개발자들과 협력하여 그들의 창의적인 비전을 현실로 만듭니다.",
      en: "Studio PADO is a premier game art outsourcing studio dedicated to crafting exceptional visual experiences. We partner with game developers worldwide to bring their creative visions to life.",
      ja: "Studio PADOは、卓越したビジュアル体験を創造するプレミアゲームアートアウトソーシングスタジオです。世界中のゲーム開発者と提携し、クリエイティブなビジョンを実現します。",
    },
    desc2: {
      ko: "우리 팀의 재능있는 아티스트와 기술 전문가들은 예술적 우수성과 최첨단 기술을 결합하여 기대를 뛰어넘는 에셋을 제공합니다.",
      en: "Our team of talented artists and technical experts combines artistic excellence with cutting-edge technology to deliver assets that exceed expectations and elevate gaming experiences.",
      ja: "才能あるアーティストと技術専門家で構成されたチームが、芸術的な卓越性と最先端技術を融合し、期待を超えるアセットを提供します。",
    },
    stats: [
      { value: "50+", label: { ko: "완료 프로젝트", en: "Projects Delivered", ja: "納品プロジェクト" } },
      { value: "15+", label: { ko: "경력 연수", en: "Years Experience", ja: "年の経験" } },
      { value: "100%", label: { ko: "고객 만족도", en: "Client Satisfaction", ja: "顧客満足度" } },
      { value: "30+", label: { ko: "팀원 수", en: "Team Members", ja: "チームメンバー" } },
    ],
  },

  // ============================================
  // 연락처 섹션
  // ============================================
  contact: {
    label: { ko: "연락하기", en: "Get In Touch", ja: "お問い合わせ" },
    heading: {
      ko: "함께 멋진 것을 만들어 봅시다",
      en: "Let's create something amazing together",
      ja: "一緒に素晴らしいものを創りましょう",
    },
    desc: {
      ko: "멋진 비주얼로 게임을 한 단계 끌어올릴 준비가 되셨나요? 프로젝트에 대해 듣고 비전을 실현하는 방법을 함께 모색하겠습니다.",
      en: "Ready to elevate your game with stunning visuals? We would love to hear about your project and explore how we can help bring your vision to life.",
      ja: "素晴らしいビジュアルでゲームを次のレベルに引き上げる準備はできましたか？プロジェクトについてお聞かせいただき、ビジョンの実現をお手伝いします。",
    },
    startProject: { ko: "프로젝트 시작", en: "Start a Project", ja: "プロジェクト開始" },
    email: { ko: "이메일", en: "Email", ja: "メール" },
    location: { ko: "위치", en: "Location", ja: "所在地" },
    locationValue: { ko: "대한민국, 서울", en: "Seoul, South Korea", ja: "韓国、ソウル" },
    followUs: { ko: "팔로우", en: "Follow Us", ja: "フォロー" },
  },

  // ============================================
  // 푸터
  // ============================================
  footer: {
    copyright: { ko: "모든 권리 보유.", en: "All rights reserved.", ja: "全著作権所有。" },
    backToTop: { ko: "맨 위로", en: "Back to top", ja: "トップへ" },
  },
} as const;

/** 번역 텍스트를 가져오는 헬퍼 함수 */
export function t(
  textObj: { ko: string; en: string; ja: string },
  lang: Language
): string {
  return textObj[lang] || textObj.en;
}
