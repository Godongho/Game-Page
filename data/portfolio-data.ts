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
    title: "CINDER CITY",
    logoText: "CINDER CITY",
    quote: "\"CINDER CITY의 Level Design과 Content Design을 담당\"",
    author: "Godongho,",
    company: "NCSOFT  ",
    image: "/cinder_city.jpg",
    category: "CONTENT DESING & LEVEL DESIGN"
  }
];
