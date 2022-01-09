import { useEffect, useState } from 'react';
import { FeedResponse, Item } from '../interfaces/blog';

type ResponseStatus = {
  loading: boolean;
  error?: string;
  items: Item[];
};

export const useBlogPosts = (mediumUrl: string) => {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;
  const [status, setStatus] = useState<ResponseStatus>({
    loading: true,
    items: [],
  });

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: FeedResponse) => {
        let items: Item[] = [];
        let error: string | undefined;

        if (data.status === 'ok') {
          items = data.items;
        } else {
          error = data.message;
        }

        setStatus({
          loading: false,
          items,
          error,
        });
      });
  }, [apiUrl]);

  return status;
};
