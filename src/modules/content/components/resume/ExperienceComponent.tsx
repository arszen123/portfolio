/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Badge, Box, Text } from '@chakra-ui/react';
import { Experience } from '../../../../data/resume';

export const ExperienceComponent: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <Box pt={2} pb={2}>
    <Text fontSize="sm">
      {experience.startDate}
      {' '}
      -
      {' '}
      {experience.endDate}
    </Text>
    <Text fontWeight="semibold" fontSize="lg">
      <Text as="span" color="primary.500">
        {experience.position}
      </Text>
      {' '}
      /
      {' '}
      {experience.company}
      ,
      {' '}
      {experience.location}
    </Text>
    <Text>{experience.description}</Text>
    <Box>
      <Text fontWeight="semibold">Technologies:</Text>
      {experience.technologies.map((technology, idx) => (
        <Badge
          key={idx}
          bgColor="primary.500"
          color="primary.50"
          borderRadius="full"
          p={1.5}
          m={1}
        >
          {technology}
        </Badge>
      ))}
    </Box>
  </Box>
);
