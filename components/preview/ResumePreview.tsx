"use client";

import { useResumeStore } from "@/store/resume-store";

export default function ResumePreview() {
  const {
    personalInfo,
    skills,
    experience,
    education,
  } = useResumeStore();

  return (
    <div className="bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-bold">
        {personalInfo.name}
      </h1>

      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>

      <hr className="my-5" />

      <h2 className="font-bold">
        Experience
      </h2>

      {experience.map(
        (item: any, idx: number) => (
          <div key={idx}>
            <p>{item.role}</p>
            <p>{item.company}</p>
          </div>
        )
      )}

      <h2 className="font-bold mt-6">
        Education
      </h2>

      {education.map(
        (item: any, idx: number) => (
          <div key={idx}>
            <p>{item.degree}</p>
            <p>{item.college}</p>
          </div>
        )
      )}

      <h2 className="font-bold mt-6">
        Skills
      </h2>

      <div className="flex gap-2 flex-wrap">
        {skills.map(
          (skill: string, idx: number) => (
            <span
              key={idx}
              className="border px-2 py-1 rounded"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  );
}