import { useEffect, useState } from 'react';
import { FeedResponse, Item } from '../interfaces/blog';

type ResponseStatus = {
  loading: boolean;
  error?: string;
  items: Item[];
};

let cachedItems: Item[] = [];

export const useBlogPosts = (mediumUrl: string) => {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;
  const [status, setStatus] = useState<ResponseStatus>({
    loading: true,
    items: [],
  });

  useEffect(() => {
    if (cachedItems.length > 0) {
      setStatus({
        loading: false,
        items: cachedItems,
      });

      return;
    }

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

        cachedItems = items;
        setStatus({
          loading: false,
          items,
          error,
        });
      });
  }, [apiUrl]);

  return status;
};
