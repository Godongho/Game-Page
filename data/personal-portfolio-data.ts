export type PortfolioCategory = {
  id: string;
  title: string;
  tags: string[];
};

export const PERSONAL_PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "3d-environment",
    title: "3D ENVIRONMENT",
    tags: [
      "REALISTIC 3D ENVIRONMENT",
      "STYLIZED 3D ENVIRONMENT"
    ]
  },
  {
    id: "hard-surface",
    title: "HARD SURFACE",
    tags: [
      "REALISTIC 3D VEHICLES",
      "REALISTIC 3D WEAPONS",
      "REALISTIC 3D HARD SURFACE"
    ]
  },
  {
    id: "3d-characters",
    title: "3D CHARACTERS",
    tags: [
      "REALISTIC 3D CHARACTERS",
      "STYLIZED 3D CHARACTERS"
    ]
  }
];
