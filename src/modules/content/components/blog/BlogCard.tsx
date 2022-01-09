import {
  Badge,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Item } from '../../interfaces/blog';

type BlogCardProps = {
  item: Item;
};

export const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  const description = `${sanitizeHtml(item.description.substring(
    item.description.indexOf('</h4>') + '</h4>'.length,
  ), {
    allowedTags: ['a', 'p'],
    allowedAttributes: {
      a: [
        {
          name: 'href',
          values: [],
        },
      ],
    },
  }).substring(0, 180)}...`;

  return (
    <LinkBox>
      <Stack
        maxW="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={item.thumbnail} alt={item.title} />

        <Box>
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h2"
              fontSize="xl"
              lineHeight="tight"
              isTruncated
            >
              <LinkOverlay href={item.link} isExternal>
                {item.title}
              </LinkOverlay>
            </Box>

            <Box dangerouslySetInnerHTML={{ __html: description }} />

            <Box mt="2" alignItems="center">
              {item.categories
                .map((category) => (
                  <Badge
                    bgColor="primary.500"
                    color="primary.50"
                    borderRadius="full"
                    p={1}
                    m={0.5}
                    key={category}
                  >
                    {category}
                  </Badge>
                ))}
            </Box>
          </Box>
        </Box>
      </Stack>
    </LinkBox>
  );
};
