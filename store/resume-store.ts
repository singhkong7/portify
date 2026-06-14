import { create } from "zustand";
import {
  Experience,
  Education,
  PersonalInfo,
} from "@/types/resume";

export interface ResumeStore {
  personalInfo: PersonalInfo;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
  setSummary: (summary: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addExperience: (exp: Experience) => void;
  addEducation: (edu: Education) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({

  personalInfo: {
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
  },

  summary: "",

  skills: [],

  experience: [],

  education: [],

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        [field]: value,
      },
    })),

  setSummary: (summary) => set({ summary }),

  addSkill: (skill) =>
    set((state) => ({
      skills: [...state.skills, skill],
    })),

  removeSkill: (skill) =>
    set((state) => ({
      skills: state.skills.filter((s) => s !== skill),
    })),

  addExperience: (exp) =>
    set((state) => ({
      experience: [...state.experience, exp],
    })),

  addEducation: (edu) =>
    set((state) => ({
      education: [...state.education, edu],
    })),

}));