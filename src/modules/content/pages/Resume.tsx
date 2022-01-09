/* eslint-disable react/no-array-index-key */
import {
  Badge, Box, Divider, Heading, Icon, IconButton, Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import ReactGa from 'react-ga4';
import { Education, Experience } from '../../../interfaces/resume';
import { useResume } from '../../../resume.context';
import { ContactComponent } from '../components/resume/ContactComponent';
import { EducationComponent } from '../components/resume/EducationComponent';
import { ExperienceComponent } from '../components/resume/ExperienceComponent';
import withTracker from '../hocs/with-tracking';

const Resume: React.FC = () => {
  const { resume, profile } = useResume();

  useEffect(() => {
    const listener = () => ReactGa.event('cv_download');
    window.addEventListener('afterprint', listener);

    return () => {
      window.removeEventListener('afterprint', listener);
    };
  });

  return (
    <Box p={2}>
      <Box
        id="resume-top"
        display="none"
      >
        <ContactComponent profile={profile} />
      </Box>
      <Box id="work">
        <Heading as="h2" size="lg" color="primary.500">
          Work Experience
        </Heading>
        <Box>
          {resume.experience.map((experience: Experience, idx) => (
            <ExperienceComponent key={idx} experience={experience} />
          ))}
        </Box>
      </Box>
      <Divider bgColor="primary.500" mt={4} mb={4} />
      <Box id="education">
        <Heading as="h2" size="lg" color="primary.500">
          Education
        </Heading>
        <Box>
          {resume.education.map((education: Education, idx) => (
            <EducationComponent key={idx} education={education} />
          ))}
        </Box>
      </Box>
      <Divider bgColor="primary.500" mt={4} mb={4} />
      <Box id="skills">
        <Heading as="h2" size="lg" color="primary.500">
          Skills
        </Heading>
        {(resume.technologies || []).map((technology, idx) => (
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
      {!!resume.awards && (
      <>
        <Divider bgColor="primary.500" mt={4} mb={4} />
        <Box id="awards">
          <Heading as="h2" size="lg" color="primary.500">
            Awards
          </Heading>
          {resume.awards.map((award, idx) => (
            <Text key={idx}>
              {award.date}
              ,
              {' '}
              {award.title}
            </Text>
          ))}
        </Box>
      </>
      )}
      <Box
        id="resume-actions"
        position="absolute"
        bottom={4}
        right={4}
      >
        <IconButton
          onClick={() => window.print()}
          size="lg"
          colorScheme="primary"
          aria-label="Download Resume"
          icon={<Icon as={FaFileDownload} />}
        />
      </Box>
    </Box>
  );
};

export default withTracker(Resume);
