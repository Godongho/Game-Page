/**
 * 다국어 번역 데이터 파일
 * 한국어(ko), 영어(en), 일본어(ja) 지원
 * 
 * 새로운 텍스트를 추가할 때 3개 언어 모두 작성해주세요.
 */

import { STUDIO_DATA } from "./studio-data";

export type Language = "ko" | "en" | "ja";

export const TRANSLATIONS = {
  // ============================================
  // 헤더 네비게이션
  // ============================================
  nav: {
    ourProject: { ko: "OUR PROJECT", en: "OUR PROJECT", ja: "OUR PROJECT" },
    ourPortfolio: { ko: "OUR PORTFOLIO", en: "OUR PORTFOLIO", ja: "OUR PORTFOLIO" },
    studio: { ko: "STUDIO", en: "STUDIO", ja: "STUDIO" },
    email: { ko: "E-mail", en: "E-mail", ja: "Eメール" },
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
  studio: STUDIO_DATA,

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
