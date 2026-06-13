"use client";

import { useResumeStore } from "@/store/resume-store";

export default function ResumePreview() {
  const { personalInfo } =
    useResumeStore();

  return (
    <div className="bg-white shadow p-8 rounded">
      <h1 className="text-3xl font-bold">
        {personalInfo.name ||
          "Your Name"}
      </h1>

      <p>{personalInfo.email}</p>

      <p>{personalInfo.phone}</p>
    </div>
  );
}