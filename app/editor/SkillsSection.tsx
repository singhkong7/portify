"use client";

import { useState } from "react";
import { useResumeStore } from "@/store/resume-store";

export default function SkillsSection() {
  const [skill, setSkill] = useState("");

  const {
    skills,
    addSkill,
    removeSkill,
  } = useResumeStore();

  return (
    <div>
      <h2 className="font-semibold mb-3">
        Skills
      </h2>

      <div className="flex gap-2">
        <input
          value={skill}
          onChange={(e) =>
            setSkill(e.target.value)
          }
          placeholder="React"
          className="border p-2 rounded flex-1"
        />

        <button
          onClick={() => {
            addSkill(skill);
            setSkill("");
          }}
          className="bg-black text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 flex-wrap mt-4">
        {skills.map(
          (item: string, idx: number) => (
            <span
              key={idx}
              className="bg-gray-200 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
}