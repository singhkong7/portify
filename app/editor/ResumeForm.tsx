"use client";

import { useResumeStore, type ResumeStore } from "@/store/resume-store";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

export default function ResumeForm() {
  const resumeState = useResumeStore() as ResumeStore;
  const {
    personalInfo,
    summary,
    updatePersonalInfo,
    setSummary,
  } = resumeState;

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

      <input
        placeholder="Location"
        value={personalInfo.location}
        onChange={(e) =>
          updatePersonalInfo(
            "location",
            e.target.value
          )
        }
        className="border p-3 w-full rounded"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          placeholder="LinkedIn URL"
          value={personalInfo.linkedin}
          onChange={(e) =>
            updatePersonalInfo(
              "linkedin",
              e.target.value
            )
          }
          className="border p-3 w-full rounded"
        />

        <input
          placeholder="GitHub URL"
          value={personalInfo.github}
          onChange={(e) =>
            updatePersonalInfo(
              "github",
              e.target.value
            )
          }
          className="border p-3 w-full rounded"
        />
      </div>

      <textarea
        placeholder="Professional summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="border p-3 w-full rounded min-h-[120px]"
      />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />
    </div>
  );
}