import { create } from "zustand";

interface ResumeStore {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };

  summary: string;

  updatePersonalInfo: (
    field: string,
    value: string
  ) => void;

  setSummary: (summary: string) => void;
}

export const useResumeStore = create<ResumeStore>(
  (set) => ({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
    },

    summary: "",

    updatePersonalInfo: (field, value) =>
      set((state) => ({
        personalInfo: {
          ...state.personalInfo,
          [field]: value,
        },
      })),

    setSummary: (summary) =>
      set({
        summary,
      }),
  })
);