export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}


export interface ResumeState {
  personalInfo: PersonalInfo;
  summary: string;
  skills: string[];
}