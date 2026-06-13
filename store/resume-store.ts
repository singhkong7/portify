import { create } from "zustand";

export const useResumeStore = create((set) => ({
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

  updatePersonalInfo: (field: string, value: string) =>
    set((state: unknown) => ({
      personalInfo: {
        ...state.personalInfo,
        [field]: value,
      },
    })),

  setSummary: (summary: string) =>
    set({ summary }),

  addSkill: (skill: string) =>
    set((state: any) => ({
      skills: [...state.skills, skill],
    })),

  removeSkill: (skill: string) =>
    set((state: any) => ({
      skills: state.skills.filter(
        (s: string) => s !== skill
      ),
    })),

  addExperience: (exp: any) =>
    set((state: any) => ({
      experience: [
        ...state.experience,
        exp,
      ],
    })),

  addEducation: (edu: any) =>
    set((state: any) => ({
      education: [
        ...state.education,
        edu,
      ],
    })),
}));