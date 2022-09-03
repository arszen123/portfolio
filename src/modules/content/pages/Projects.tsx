/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Center, Link, Stack, Text,
} from '@chakra-ui/react';
import { ProjectComponent } from '../components/projects/ProjectComponent';
import { useResume } from '../../../resume.context';
import withTracker from '../hocs/with-tracking';

const Projects: React.FC = () => {
  const { projects, profile } = useResume();

  return (
    projects.length === 0
      ? (
        <Center>
          <Stack>
            <Center fontWeight="bold">Comming soon...</Center>
            {!!profile.social?.github && (
            <Text>
              In the meantime check out my projects on
              {' '}
              <Link
                color="primary.500"
                href={profile.social.github}
                isExternal
              >
                Github
              </Link>
              .
            </Text>
            )}
          </Stack>
        </Center>
      )
      : (
        <Stack gap={4}>
          {projects.map((project, index) => (
            <ProjectComponent key={index} project={project} />
          ))}
        </Stack>
      )
  );
};

export default withTracker(Projects);
