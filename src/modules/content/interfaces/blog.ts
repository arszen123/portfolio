export type Feed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

export type Item = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories: string[];
};

export type Enclosure = {
};

export type FeedResponse = {
  status: 'ok';
  feed: Feed;
  items: Item[];
} | {
  status: 'error';
  message: string;
};
