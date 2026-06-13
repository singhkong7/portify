"use client";

import { useState } from "react";
import { useResumeStore } from "@/store/resume-store";

export default function EducationSection() {
  const { addEducation } =
    useResumeStore();

  const [college, setCollege] =
    useState("");

  const [degree, setDegree] =
    useState("");

  const [year, setYear] =
    useState("");

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">
        Education
      </h2>

      <input
        placeholder="College"
        value={college}
        onChange={(e) =>
          setCollege(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <input
        placeholder="Degree"
        value={degree}
        onChange={(e) =>
          setDegree(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <input
        placeholder="Year"
        value={year}
        onChange={(e) =>
          setYear(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <button
        onClick={() =>
          addEducation({
            college,
            degree,
            year,
          })
        }
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add Education
      </button>
    </div>
  );
}