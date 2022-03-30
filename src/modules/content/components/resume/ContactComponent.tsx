import React from 'react';
import {
  Box, Avatar, Center, Icon, Link, Stack, Text, Divider,
} from '@chakra-ui/react';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { Profile } from '../../../../interfaces/profile';

type ContactProps = {
  profile: Profile;
};

export const ContactComponent: React.FC<ContactProps> = ({ profile }) => (
  <>
    <Stack
      direction="row"
      mt={8}
    >
      <Box>
        <Avatar
          color="white"
          bgColor="primary.500"
          size="lg"
          name={profile.name}
          src={profile.profilePicture}
        />
      </Box>
      <Center>
        <Text
          fontWeight="bold"
          fontSize="2xl"
        >
          {profile.name}
        </Text>
      </Center>
    </Stack>
    <Divider bgColor="primary.500" mt={4} mb={4} />
    <Stack>
      <Stack
        direction="row"
      >
        <Icon as={FaGlobe} w={6} h={6} color="primary.500" />
        <Center>
          <Link to={profile.portfolioUrl}>
            {profile.portfolioUrl}
          </Link>
        </Center>
      </Stack>
      {!!profile.social?.linkedin
    && (
    <Stack
      direction="row"
    >
      <Icon as={FaLinkedin} w={6} h={6} color="primary.500" />
      <Center>
        <Link to={profile.social?.linkedin}>
          {profile.social?.linkedin}
        </Link>
      </Center>
    </Stack>
    )}
      {!!profile.social?.github
    && (
    <Stack
      direction="row"
    >
      <Icon as={FaGithub} w={6} h={6} color="primary.500" />
      <Center>
        <Link to={profile.social?.github}>
          {profile.social?.github}
        </Link>
      </Center>
    </Stack>
    )}
    </Stack>
  </>
);
