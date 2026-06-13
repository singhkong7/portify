"use client";

import { useState } from "react";
import { useResumeStore } from "@/store/resume-store";

export default function ExperienceSection() {
  const { addExperience } =
    useResumeStore();

  const [company, setCompany] =
    useState("");

  const [role, setRole] =
    useState("");

  const [duration, setDuration] =
    useState("");

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">
        Experience
      </h2>

      <input
        placeholder="Company"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <input
        placeholder="Duration"
        value={duration}
        onChange={(e) =>
          setDuration(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <button
        onClick={() =>
          addExperience({
            company,
            role,
            duration,
          })
        }
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add Experience
      </button>
    </div>
  );
}