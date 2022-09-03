import React from 'react';
import {
  Box, Avatar, Center, Icon, Link, Stack, Text, Divider,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Profile } from '../../../../interfaces/profile';

type ContactProps = {
  profile: Profile;
};

type ContactRowProps = {
  link?: string;
  linkPrefix?: string;
  target?: string;
  icon: IconType;
};

const ContactRow: React.FC<ContactRowProps> = ({
  link,
  linkPrefix = '',
  target,
  icon,
}) => {
  if (!link) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return (
    <Stack
      direction="row"
    >
      <Icon as={icon} w={6} h={6} color="primary.500" />
      <Center>
        <Link to={linkPrefix + link} href={linkPrefix + link} target={target}>
          {link}
        </Link>
      </Center>
    </Stack>
  );
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
        <Stack spacing={0}>
          <Text
            m={0}
            fontWeight="bold"
            fontSize="2xl"
          >
            {profile.name}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="sm"
          >
            {profile.position}
          </Text>
        </Stack>
      </Center>
    </Stack>
    <Divider bgColor="primary.500" mt={4} mb={4} />
    <Stack direction="row" gap={8}>
      {(!!profile.contact?.email || !!profile.contact?.phone) && (
      <Stack>
        <ContactRow
          icon={FaEnvelope}
          link={profile.contact?.email}
          linkPrefix="mailto:"
        />
        <ContactRow
          icon={FaPhone}
          link={profile.contact?.phone}
          linkPrefix="tel:"
        />
      </Stack>
      )}
      <Stack>
        <ContactRow
          icon={FaGlobe}
          link={profile.portfolioUrl}
          target="_blank"
        />
        <ContactRow
          icon={FaLinkedin}
          link={profile.social?.linkedin}
          target="_blank"
        />
        <ContactRow
          icon={FaGithub}
          link={profile.social?.github}
          target="_blank"
        />
      </Stack>
    </Stack>
  </>
);
