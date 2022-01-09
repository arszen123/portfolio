import {
  Box,
  Link,
  SimpleGrid,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BlogCard } from '../components/blog/BlogCard';
import withTracker from '../hocs/with-tracking';
import { useBlogPosts } from '../hooks/blog-posts';

type BlogProps = {
  mediumUrl: string;
};

const Blog: React.FC<BlogProps> = ({ mediumUrl }) => {
  const mediumPage = mediumUrl.replace('/feed', '');
  const { loading, items, error } = useBlogPosts(mediumUrl);

  if (loading) {
    return (
      <Box>
        <Stack gap={2}>
          <SkeletonText
            noOfLines={8}
            mt={4}
            spacing={4}
            skeletonHeight="10px"
          />
        </Stack>
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

  return (
    <Box textAlign="center" pt={4} fontSize="md">
      <Text>Failed to load blog posts.</Text>
      <Text>
        See all the available blog posts on
        {' '}
        <Link
          color="primary.500"
          fontWeight="semibold"
          textDecoration="underline"
          href={mediumPage}
          isExternal
        >
          Medium
        </Link>
        .
      </Text>
    </Box>
  );
};

export default withTracker(Blog);
