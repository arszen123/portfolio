export type Experience = {
  company: string;
  position: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  major: string;
};

export type Award = {
  title: string;
  date: string;
};

export type Resume = {
  experience: Experience[];
  education: Education[];
  technologies?: string[];
  awards?: Award[];
};
