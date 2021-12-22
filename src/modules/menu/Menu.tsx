import React from 'react';
import {
  Avatar, Box, Flex, Icon, Link, Spacer, Stack, Text, useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaDev,
  FaFacebook,
  FaGithub, FaLinkedin, FaMedium, FaTwitter,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { profile, Social } from '../../data/profile';
import { RouterButton } from './components/RouterButton';

const ICONS: {
  [K in keyof Required<Social>]: IconType;
} = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  medium: FaMedium,
  dev: FaDev,
  github: FaGithub,
};

export const Menu: React.FC = () => {
  const avatarSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <Flex
      id="menu"
      textAlign="center"
      direction="column"
      h={{ base: 'max-content', xl: '100%' }}
      w={{ base: '100%', xl: 'md' }}
      p={2}
      gap={{ base: 1, xl: 4 }}
      bgGradient={{
        base: 'linear(to-b, primary.500, white)',
        xl: 'initial',
      }}
    >
      <Box>
        <Avatar
          color="white"
          bgColor="primary.500"
          size={avatarSize}
          name={profile.name}
          src={profile.profilePicture}
        />
      </Box>
      <Text
        color="white"
        fontWeight="bold"
        fontSize={{ base: 'lg', xl: '2xl' }}
      >
        {profile.name}
      </Text>
      <Stack direction={{ base: 'row', xl: 'column' }} m="auto">
        <RouterButton to="/" colorScheme="primary">About</RouterButton>
        <RouterButton
          to="/projects"
          colorScheme="primary"
        >
          Projects
        </RouterButton>
        <RouterButton to="/resume" colorScheme="primary">Resume</RouterButton>
      </Stack>
      <Spacer mt={4} />
      <Stack direction="row" m="auto">
        {Object
          .entries(profile.social || {})
          .map(([key, url]) => (
            <Link
              key={key}
              href={url}
              isExternal
            >
              <Icon
                as={ICONS[key as keyof Social]}
                color="primary.500"
                title={key}
                w={8}
                h={8}
              />
            </Link>
          ))}
      </Stack>
    </Flex>
  );
};
