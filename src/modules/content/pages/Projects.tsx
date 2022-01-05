/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Center, Stack } from '@chakra-ui/react';
import { ProjectComponent } from '../components/projects/ProjectComponent';
import { useResume } from '../../../resume.context';

export const Projects: React.FC = () => {
  const { projects } = useResume();

  return (
    projects.length === 0
      ? <Center fontWeight="bold">Comming soon...</Center>
      : (
        <Stack gap={4}>
          {projects.map((project, index) => (
            <ProjectComponent key={index} project={project} />
          ))}
        </Stack>
      )
  );
};
