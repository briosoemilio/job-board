export interface JobListing {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: Level;
  postedAt: string;
  contract: Contract;
  location: string;
  languages: string[];
  tools: string[];
}

export enum Contract {
  Contract = "Contract",
  FullTime = "Full Time",
  PartTime = "Part Time",
}

export enum Level {
  Junior = "Junior",
  Midweight = "Midweight",
  Senior = "Senior",
}


export enum Languages {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  Python = "Python",
  Ruby = "Ruby",
}

export enum Tools {
  React = "React",
  Sass = "Sass",
  Ruby = "Ruby",
  RoR = "RoR",
  Vue = "Vue",
  Django = "Django",
}