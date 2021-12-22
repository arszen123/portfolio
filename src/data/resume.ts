export type Experience = {
  company: string;
  position: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  major: string;
};

export type Award = {
  title: string;
  date: string;
};

export type Resume = {
  experience: Experience[];
  education: Education[];
  technologies?: string[];
  awards?: Award[];
};

export const resume: Resume = {
  experience: [
    {
      company: 'Nexum Magyarország Kft.',
      position: 'Software Engineer',
      location: 'Hungary',
      description: `Maintained and developed a career portal application
      which covers the whole recruitment and selection process.`,
      startDate: 'Jan 2019',
      endDate: 'Jan 2021',
      technologies: [
        // DB
        'PostgreSQL',
        'Elasticserach',
        'MySQL',
        // Tech
        'PHP',
        'Zend Framework',
        'Doctrine',
        'Javascript',
        'JQuery',
        'Vue',
        // Tools
        'GitLab',
        'Sentry',
        'Docker',
      ],
    },
    {
      company: 'Nexum Magyarország Kft.',
      position: 'Software Engineer',
      location: 'Hungary',
      description: `Maintained and developed new features for a
      job posting and searching site.`,
      startDate: 'Feb 2018',
      endDate: 'Jan 2019',
      technologies: [
        // DB
        'MySQL',
        // Tech
        'PHP',
        'Laravel',
        'Symfony',
        'Javascript',
        'JQuery',
        'Vue',
        // Tools
        'Jira',
        'GitLab',
        'Bugsnag',
        'Docker',
      ],
    },
    {
      company: 'Case Solvers Kft.',
      position: 'Software Engineer',
      location: 'Hungary',
      description: `Developed a survey application
      which evaluates the different skills of the respondent`,
      startDate: 'Mar 2017',
      endDate: 'Sep 2017',
      technologies: [
        // DB
        'MySQL',
        // Tech
        'PHP',
        'Javascript',
        'JQuery',
        // Tools
        'Trello',
      ],
    },
  ],
  education: [
    {
      school: 'University of Szeged',
      location: 'Hungary, Szeged',
      degree: 'Bachelor of Science',
      startDate: '2017',
      endDate: '2020',
      major: 'Computer Science',
    },
    {
      school: `Bolyai Secondary Grammar School
      and Dormitory for Gifted Students`,
      location: 'Serbia, Senta',
      degree: 'High School',
      startDate: '2013',
      endDate: '2017',
      major: 'Mathematics',
    },
  ],
  technologies: [
    'TypeScript',
    'Javascript',
    'PHP',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
  ],
  awards: [
    {
      date: '2017',
      title: 'Invitech Innoapps 1st place in the "Ne szórakozz" category',
    },
    {
      date: '2017',
      title: 'Szegedi Innovatív Informatika Verseny 2nd place',
    },
    {
      date: '2016',
      title: 'MTS APP Konkurs 3th place',
    },
  ],
};
