import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Center, Heading, Link, Text,
} from '@chakra-ui/react';
import { profile } from '../../../data/profile';

export const About: React.FC = () => (
  <Center h="100%">
    <Box>
      <Heading
        bgGradient="linear(to-r, primary.500, gray.200)"
        bgClip="text"
        as="h2"
        size="4xl"
        fontWeight="bold"
      >
        Hello,
      </Heading>
      <Text
        as="h3"
        fontSize="xl"
        fontWeight="semibold"
        bgGradient="linear(to-r, primary.500, gray.200)"
        bgClip="text"
      >
        here is who I am & what I do.
      </Text>
      <Text>{profile.description}</Text>
      <Text>
        Here you can find my
        {' '}
        <Link
          as={RouterLink}
          to="/resume"
          textDecoration="underline"
          color="primary.500"
          fontWeight="bold"
        >
          resume
        </Link>
        {' '}
        and
        {' '}
        <Link
          as={RouterLink}
          to="/projects"
          textDecoration="underline"
          color="primary.500"
          fontWeight="bold"
        >
          projects
        </Link>
        .
      </Text>
    </Box>
  </Center>
);
