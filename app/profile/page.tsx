"use client";

import { useState } from "react";
import Link from "next/link";
import { templates } from "@/data/templates";
import { Experience, Education } from "@/types/resume";

type SavedResume = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location?: string;
  };
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  templateId: string;
  templateName: string;
  savedAt: string;
};

export default function ProfilePage() {
  const [savedResumes, setSavedResumes] = useState<SavedResume[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("savedResumes");
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  const deleteResume = (index: number) => {
    const next = savedResumes.filter((_, idx) => idx !== index);
    setSavedResumes(next);
    localStorage.setItem("savedResumes", JSON.stringify(next));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-900">
        My Resumes
      </h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Here are your saved resumes in a tabular view. Use Edit to continue working or Delete to remove a saved resume.
      </p>

      {savedResumes.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-8 text-slate-600">
          <p className="text-lg font-medium">
            No saved resumes yet.
          </p>
          <p className="mt-2">
            Create one in the editor and use the Save button to keep it in your profile.
          </p>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Template</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Saved On</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Contact</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {savedResumes.map((resume, idx) => {
                const template = templates.find(
                  (item) => String(item.id) === resume.templateId
                );

                return (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-6 py-5 align-top">
                      <div className="text-sm font-semibold text-slate-900">
                        {resume.personalInfo.name || "Saved Resume"}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {resume.summary ? `${resume.summary.slice(0, 80)}${resume.summary.length > 80 ? "..." : ""}` : "No summary available."}
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-700">
                      {template?.name || "Unknown"}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-700">
                      {new Date(resume.savedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-700">
                      <div>{resume.personalInfo.email}</div>
                      {resume.personalInfo.phone ? (
                        <div className="mt-1 text-slate-500">{resume.personalInfo.phone}</div>
                      ) : null}
                    </td>
                    <td className="px-6 py-5 align-top text-right text-sm text-slate-700">
                      <div className="inline-flex items-center gap-2 justify-end">
                        <Link
                          href={`/editor/${resume.templateId}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                          aria-label="Edit resume"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                          </svg>
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteResume(idx)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                          aria-label="Delete resume"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}