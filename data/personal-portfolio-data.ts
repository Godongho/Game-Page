export type PortfolioCategory = {
  id: string;
  title: string;
  tags: string[];
  /** 호버 시 슬라이드되어 나타나는 배경 이미지 */
  hoverImage?: string;
};

export const PERSONAL_PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "3d-level-design",
    title: "3D LEVEL DESIGN",
    tags: [
      "LEVEL DESIGN BLOCKOUT",
      "STEAMPUNK Adventure",
      "Third-Person Shooter"
    ],
    hoverImage: "/portfolio_golden_city.jpg"
  },
  {
    id: "3d-art",
    title: "3D-ART",
    tags: [
      "REALISTIC 3D Cinematic",
      "",
      ""
    ],
    hoverImage: "/portfolio_3d_art.png"
  },
  {
    id: "3d-characters",
    title: "3D CHARACTERS",
    tags: [
      "REALISTIC 3D CHARACTERS",
      "STYLIZED 3D CHARACTERS"
    ],
    hoverImage: "/portfolio_district_map.jpg"
  }
];
