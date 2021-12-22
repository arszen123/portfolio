import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Education } from '../../../../data/resume';

export const EducationComponent: React.FC<{ education: Education }> = ({
  education,
}) => (
  <Box pt={2} pb={2}>
    <Text fontSize="sm">
      {education.startDate}
      {' '}
      -
      {' '}
      {education.endDate}
    </Text>
    <Text fontWeight="semibold" fontSize="lg">
      <Text as="span" color="primary.500">
        {education.school}
      </Text>
      ,
      {' '}
      {education.location}
    </Text>
    <Text>
      <Text as="span" fontWeight="semibold">
        Major:
        {' '}
      </Text>
      {education.major}
    </Text>
  </Box>
);
