import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BlogCard } from '../components/blog/BlogCard';
import { useBlogPosts } from '../hooks/blog-posts';

type BlogProps = {
  mediumUrl: string;
};

export const Blog: React.FC<BlogProps> = ({ mediumUrl }) => {
  const { loading, items, error } = useBlogPosts(mediumUrl);

  if (loading) {
    return (
      <Box>
        <Skeleton isLoaded={!loading}>
          <Heading>title</Heading>
        </Skeleton>
      </Box>
    );
  }

  if (!error) {
    return (
      <SimpleGrid gap={4} pt={4} pb={4}>
        {items.map((item) => (
          <BlogCard item={item} key={item.link} />
        ))}
      </SimpleGrid>
    );
  }

  return <Text>{error}</Text>;
};
