"use client";

import { useResumeStore } from "@/store/resume-store";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

export default function ResumeForm() {
  const {
    personalInfo,
    updatePersonalInfo,
  } = useResumeStore();

  return (
    <div className="space-y-6">
      <input
        placeholder="Name"
        value={personalInfo.name}
        onChange={(e) =>
          updatePersonalInfo(
            "name",
            e.target.value
          )
        }
        className="border p-3 w-full rounded"
      />

      <input
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) =>
          updatePersonalInfo(
            "email",
            e.target.value
          )
        }
        className="border p-3 w-full rounded"
      />

      <input
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={(e) =>
          updatePersonalInfo(
            "phone",
            e.target.value
          )
        }
        className="border p-3 w-full rounded"
      />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />
    </div>
  );
}