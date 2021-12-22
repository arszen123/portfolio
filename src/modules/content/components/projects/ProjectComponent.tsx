/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Badge,
  Box, Divider, Icon, Link, Stack, Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../../../../data/projects';

export const ProjectComponent: React.FC<{ project: Project }> = ({
  project,
}) => (
  <Box
    shadow="lg"
    borderWidth="1px"
    borderRadius="lg"
    p={4}
  >
    <Text
      fontSize="xl"
      fontWeight="bold"
      color="primary.500"
    >
      {project.name}
    </Text>
    <Text>{project.description}</Text>
    {(!!project.github || !!project.demo) && (
    <Stack direction="row" h={6}>
      {!!project.github && (
      <Link
        href={project.github}
        fontWeight="bold"
        isExternal
      >
        View on GitHub
        <Icon as={FaExternalLinkAlt} mx={2} w={3} h={3} />
      </Link>
      )}
      {!!project.demo && !!project.github
        && <Divider orientation="vertical" />}
      {!!project.demo && (
      <Link
        href={project.demo}
        fontWeight="bold"
        isExternal
      >
        View demo
        <Icon as={FaExternalLinkAlt} mx={2} w={3} h={3} />
      </Link>
      )}
    </Stack>
    )}
    <Box>
      <Text fontWeight="bold">Used Technologies</Text>
      <Box>
        {project.technologies.map((tech, idx) => (
          <Badge
            key={idx}
            bgColor="primary.500"
            color="primary.50"
            borderRadius="full"
            p={1.5}
            m={1}
          >
            {tech}
          </Badge>
        ))}
      </Box>
    </Box>
  </Box>
);
