"use client";

import { useResumeStore } from "@/store/resume-store";

export default function ResumeForm() {
  const {
    personalInfo,
    updatePersonalInfo,
  } = useResumeStore();

  return (
    <div className="space-y-4">
      <input
        placeholder="Name"
        value={personalInfo.name}
        onChange={(e) =>
          updatePersonalInfo(
            "name",
            e.target.value
          )
        }
        className="w-full border p-3 rounded"
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
        className="w-full border p-3 rounded"
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
        className="w-full border p-3 rounded"
      />
    </div>
  );
}