declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_MEDIUM_FEED_URL?: `https://medium.com/feed/${string}`;
    readonly REACT_APP_MEASUREMENT_ID?: string;
  }
}
