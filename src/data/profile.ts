export type Profile = {
  name: string;
  position: string;
  description: string;
  profilePicture: string;
  social?: Social;
  quote?: string;
  quoteAuthor?: string;
  portfolioUrl: string;
};

export type Social = {
  facebook?: `https://facebook.com/${string}`;
  linkedin?: `https://linkedin.com/in/${string}`;
  twitter?: `https://twitter.com/${string}`;
  medium?: `https://medium.com/${string}`;
  dev?: `https://dev.to/${string}`;
  github?: `https://github.com/${string}`;
};

export const profile: Profile = {
  name: 'Arsen Ali',
  position: 'Software Engineer',
  profilePicture: '',
  description: `I am a software engineer with a passion for building software
  that improves the lives of people.
  I have a background in mathematics and computer science.`,
  social: {
    linkedin: 'https://linkedin.com/in/ali-arszen',
    github: 'https://github.com/arszen123',
    medium: 'https://medium.com/@arsen.ali',
  },
  portfolioUrl: 'https://aliarsen.com',
};
