import { Profile } from './profile';
import { Project } from './project';
import { Resume } from './resume';

export type CompositeResume = {
  profile: Profile;
  resume: Resume;
  projects: Project[];
};
