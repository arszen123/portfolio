import { CompositeResume } from './interfaces/composite-resume';

export const resume: CompositeResume = {
  profile: {
    name: 'Test User',
    position: 'Software Engineer',
    profilePicture: '',
    description: `I am a software engineer with a passion for building software
    that improves the lives of people.
    I have a background in mathematics and computer science.`,
    social: {
      linkedin: 'https://linkedin.com/in/test-user',
      github: 'https://github.com/test-user',
      medium: 'https://medium.com/@test.user',
    },
    portfolioUrl: 'http://localhost:3000/',
  },
  projects: [
    {
      name: 'Test Project',
      description: 'Test Project Description',
      technologies: ['PHP', 'Javascript', 'JQuery', 'Vue'],
    },
  ],
  resume: {
    experience: [
      {
        company: 'Test Company',
        position: 'Software Engineer',
        location: 'Test Location',
        description: 'Test Description.',
        startDate: 'Jan 2019',
        endDate: 'Jan 2021',
        technologies: ['PHP', 'Javascript', 'JQuery', 'Vue'],
      },
    ],
    education: [
      {
        school: 'Test School',
        location: 'Test Location',
        degree: 'Test Degree',
        startDate: 'Jan 2019',
        endDate: 'Jan 2021',
        major: 'Test Major',
      },
    ],
    technologies: ['PHP', 'Javascript', 'JQuery', 'Vue'],
    awards: [
      {
        title: 'Test Award',
        date: 'Jan 2019',
      },
    ],
  },
};
