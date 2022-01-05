import React from 'react';
import {
  Avatar, Box, Center, Icon, Link, Stack, Text,
} from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { Profile } from '../../../../interfaces/profile';

type ContactProps = {
  profile: Profile;
};

export const ContactComponent: React.FC<ContactProps> = ({ profile }) => (
  <>
    <Stack
      direction="row"
      p={2}
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
    <Stack
      direction="row"
      p={2}
    >
      <Icon as={FaGlobe} w={6} h={6} color="primary.500" />
      <Center>
        <Link to={profile.portfolioUrl}>
          {profile.portfolioUrl}
        </Link>
      </Center>
    </Stack>
  </>
);
