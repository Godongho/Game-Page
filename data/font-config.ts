/**
 * 폰트 크기 설정 파일
 * 이 파일에서 각 섹션의 폰트 크기를 손쉽게 조절할 수 있습니다.
 * Tailwind 클래스 또는 CSS 값을 사용하세요.
 * 
 * 참고 - Tailwind 크기:
 *   text-xs: 12px, text-sm: 14px, text-base: 16px, text-lg: 18px
 *   text-xl: 20px, text-2xl: 24px, text-3xl: 30px, text-4xl: 36px
 *   text-5xl: 48px, text-6xl: 60px, text-7xl: 72px, text-8xl: 96px
 *   text-[20px]: 커스텀 크기 (원하는 px 값)
 */

// ============================================
// OUR PROJECT 섹션 (포트폴리오 슬라이더)
// ============================================
export const PROJECT_SECTION_FONTS = {
  /** "OUR SELECTION" 작은 서브타이틀 */
  subTitle: "10px",
  /** "OUR PROJECT" 메인 타이틀 */
  mainTitle: "36px",
  /** "OUR PROJECT" 메인 타이틀 (md 이상) */
  mainTitleMd: "48px",
  /** 카드 호버 시 "SERVICES PROVIDED" 텍스트 */
  cardServiceLabel: "14px",
  /** 카드 호버 시 인용문 텍스트 */
  cardQuote: "13px",
  /** 카드 호버 시 저자/회사 텍스트 */
  cardAuthor: "17px",
};

// ============================================
// OUR PORTFOLIO 섹션 (개인 포트폴리오 리스트)
// ============================================
export const PORTFOLIO_LIST_FONTS = {
  /** "OUR PORTFOLIO" 메인 타이틀 */
  mainTitle: "70px",
  /** 카테고리 제목 (예: CONCEPT ART) */
  categoryTitle: "48px",
  /** "MORE" 링크 */
  moreLink: "12px",
  /** 태그 텍스트 */
  tag: "15px",
};

// ============================================
// HERO 섹션
// ============================================
export const HERO_FONTS = {
  /** "CONTACT US" 버튼 텍스트 */
  contactBtn: "14px",
};

// ============================================
// 헤더 (상단 네비게이션)
// ============================================
export const HEADER_FONTS = {
  /** 네비게이션 링크 폰트 크기 */
  navLinkSize: "11px",
  /** 네비게이션 링크 자간 (글자 사이 간격) */
  navLetterSpacing: "0.2em",
  /** 네비게이션 메뉴 항목 간의 간격 (gap) 
   * clamp(최소크기, 권장크기, 최대크기) 형태로 작성하면 화면 크기에 맞춰 자동으로 줄어듭니다.
   */
  navGap: "clamp(16px, 3vw, 40px)",
};
