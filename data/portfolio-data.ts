export interface PortfolioProject {
  id: string;
  title: string;
  logoText: string;
  quote: string;
  author: string;
  company: string;
  image: string;
  category: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "1",
    title: "지옥의 화승총",
    logoText: "MATCHLOCK OF HELL",
    quote: "\"SEKIRO의 Z축 로프액션이 가져다 주는 재미를 새롭게 창작한 LEVEL\"",
    author: "Godongho,",
    company: "PADO STUDIOS",
    image: "/jiok_matchlock.jpg",
    category: "CONCEPT & LEVEL DESIGN"
  },
  {
    id: "2",
    title: "ELDEN REALM",
    logoText: "ELDEN REALM",
    quote: "\"The level of detail in the environment art is unparalleled. Studio Pado truly understood the dark fantasy aesthetic we were aiming for.\"",
    author: "Sarah J., ( Creative Lead )",
    company: "FromSoft Horizons",
    image: "/portfolio_fantasy_rpgvq_15_1774764213174.png",
    category: "ENV ART"
  },
  {
    id: "3",
    title: "AERION CLASH",
    logoText: "AERION CLASH",
    quote: "\"Technical execution and optimization were key for our mobile flagship. Pado delivered high-fidelity mechs that run flawlessly.\"",
    author: "Chen W., ( Tech Director )",
    company: "Nebula Games",
    image: "/portfolio_scifi_mechvq_15_1774764235159.png",
    category: "MECH DESIGN"
  }
];
