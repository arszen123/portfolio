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
    facebook: 'https://facebook.com/ali.arszen',
    linkedin: 'https://linkedin.com/in/ali-arszen',
    twitter: 'https://twitter.com/arsenali',
    medium: 'https://medium.com/@arsen.ali',
    github: 'https://github.com/arszen123',
  },
  portfolioUrl: 'http://localhost:3000',
};
