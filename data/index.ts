export type ProjectData = {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

export const MOCK_DATA: ProjectData[] = [
  {
    id: 1,
    title: "첫 번째 프로젝트",
    description: "여기에 설명을 입력하세요.",
    imageUrl: "",
    link: "https://github.com",
  },
  {
    id: 2,
    title: "두 번째 프로젝트",
    description: "여기에 설명을 입력하세요.",
    imageUrl: "",
    link: "https://github.com",
  },
];

export const CURSOR_CONFIG = {
  // mass 값을 작게 주면 마우스가 훨씬 가볍고 부드럽게(끊김 없이) 즉각 반응합니다.
  spring: { damping: 25, stiffness: 600, mass: 0.1 },
};

export const HERO_DATA = {
  bgTextLeft: "STU",
  bgTextRight: "DIO",
  outlineText: "PADO",
  outlineTextPos: { top: "40%", left: "5%" },
  outlineColor: "#ff0000",
  glowColor: "transparent",
  bgTextFlickerDuration: 5,
  bgTextSize: "clamp(2.5rem, 15vw, 18rem)",
  bgTextWeight: "600",
  bgTextPos: { bottom: "50px", left: "-20%", right: "0%", gap: "0vw" },
  contactBtnPos: { bottom: "50%", right: "10%" },
  contactBtnText: "CONTACT US",
  badgeText1: "GET IN TOUCH",
  badgeText2: "STUDIO PADO",
  headerLogoSize: "50px",
  headerLogoSizeTop: "70px",

  // ============================================
  // 레이아웃 간격 조절 (PADO와 STUDIO 사이 간격)
  // ============================================
  /** PADO 텍스트 상단 여백 (기본값: '15vh') */
  paddingTop: "40vh",
  /** PADO와 STUDIO 사이의 수직 간격 (기본값: '10vh', 창을 반으로 줄였을 때 간격을 좁히고 싶다면 '5vh'나 '50px' 등으로 조절하세요) */
  verticalGap: "5vh",
};
