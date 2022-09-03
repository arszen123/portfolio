export type Profile = {
  name: string;
  position: string;
  description: string;
  profilePicture: string;
  social?: Social;
  quote?: string;
  quoteAuthor?: string;
  portfolioUrl: string;
  contact?: {
    email?: `${string}@${string}.${string}`;
    phone?: string;
  }
};

export type Social = {
  facebook?: `https://facebook.com/${string}`;
  linkedin?: `https://linkedin.com/in/${string}`;
  twitter?: `https://twitter.com/${string}`;
  medium?: `https://medium.com/${string}`;
  dev?: `https://dev.to/${string}`;
  github?: `https://github.com/${string}`;
};
