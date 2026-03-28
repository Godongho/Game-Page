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
    imageUrl: "/placeholder.jpg",
    link: "https://github.com",
  },
  {
    id: 2,
    title: "두 번째 프로젝트",
    description: "여기에 설명을 입력하세요.",
    imageUrl: "/placeholder.jpg",
    link: "https://github.com",
  },
];

export const CURSOR_CONFIG = {
  // mass 값을 작게 주면 마우스가 훨씬 가볍고 부드럽게(끊김 없이) 즉각 반응합니다.
  spring: { damping: 25, stiffness: 600, mass: 0.1 },
};

export const HERO_DATA = {
  bgTextLeft: "LEVEL",
  bgTextRight: "DESIGN",
  outlineText: "801",
  description: "We are an outsourcing game development studio with over 1 million hours of experience. And we know exactly how to create the next-level immersive gaming experience",
  contactBtnText: "CONTACT US",
  badgeText1: "GET IN TOUCH",
  badgeText2: "STUDIO 801",
  imageUrl: "/samurai-ai.jpg"
};
