export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface Education {
  college: string;
  degree: string;
  year: string;
}

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
  experience: Experience[];
  education: Education[];
}