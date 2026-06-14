"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import { templates } from "@/data/templates";
import { useResumeStore } from "@/store/resume-store";
import { Experience, Education } from "@/types/resume";

interface ResumePreviewProps {
  templateId: string;
}

export default function ResumePreview({
  templateId,
}: ResumePreviewProps) {
  const router = useRouter();

  const {
    personalInfo,
    summary,
    skills,
    experience,
    education,
  } = useResumeStore();

  const currentTemplate = useMemo(
    () =>
      templates.find(
        (template) =>
          String(template.id) === templateId
      ) ?? templates[0],
    [templateId]
  );

  const theme =
    currentTemplate.theme ?? {
      container: "bg-white border border-slate-200",
      accent: "text-sky-600",
      heading: "text-slate-950",
      text: "text-slate-700",
      subtext: "text-slate-500",
    };

  const themePdfColors: Record<
    string,
    {
      background: string;
      heading: string;
      accent: string;
      text: string;
      subtext: string;
      badgeBg: string;
      badgeText: string;
    }
  > = {
    professional: {
      background: "#ffffff",
      heading: "#0f172a",
      accent: "#0ea5e9",
      text: "#334155",
      subtext: "#64748b",
      badgeBg: "#e2e8f0",
      badgeText: "#0f172a",
    },
    modern: {
      background: "#f8fafc",
      heading: "#0f172a",
      accent: "#16a34a",
      text: "#334155",
      subtext: "#64748b",
      badgeBg: "#ecfdf5",
      badgeText: "#065f46",
    },
    minimal: {
      background: "#ffffff",
      heading: "#0f172a",
      accent: "#334155",
      text: "#334155",
      subtext: "#64748b",
      badgeBg: "#f8fafc",
      badgeText: "#0f172a",
    },
    executive: {
      background: "#0f172a",
      heading: "#f8fafc",
      accent: "#f59e0b",
      text: "#e2e8f0",
      subtext: "#94a3b8",
      badgeBg: "#334155",
      badgeText: "#f8fafc",
    },
    creative: {
      background: "#fff7ff",
      heading: "#0f172a",
      accent: "#8b5cf6",
      text: "#334155",
      subtext: "#64748b",
      badgeBg: "#fde8ff",
      badgeText: "#5b21b6",
    },
    tech: {
      background: "#0f172a",
      heading: "#f8fafc",
      accent: "#22d3ee",
      text: "#e2e8f0",
      subtext: "#94a3b8",
      badgeBg: "#0f172a",
      badgeText: "#d8fdfd",
    },
    corporate: {
      background: "#ffffff",
      heading: "#0f172a",
      accent: "#334155",
      text: "#334155",
      subtext: "#64748b",
      badgeBg: "#f3f4f6",
      badgeText: "#0f172a",
    },
  };

  const currentPdfTheme =
    themePdfColors[currentTemplate.style] ?? themePdfColors.professional;

  const isDarkTheme =
    theme.container.includes("text-slate-100") ||
    theme.container.includes("text-white") ||
    theme.heading === "text-white" ||
    theme.text === "text-slate-200";

  const saveButtonClass = isDarkTheme
    ? "bg-white text-slate-900 hover:bg-slate-200"
    : "bg-black text-white hover:bg-slate-800";

  const downloadButtonClass = isDarkTheme
    ? "border border-slate-300 text-white hover:bg-slate-800"
    : "border border-slate-300 text-slate-900 hover:bg-slate-100";

  const skillBadgeClass = isDarkTheme
    ? "bg-slate-800 text-slate-100"
    : "bg-slate-100 text-slate-900";

  const resumeData = useMemo(
    () => ({
      personalInfo,
      summary,
      skills,
      experience,
      education,
      templateId,
      templateName: currentTemplate.name,
      savedAt: new Date().toISOString(),
    }),
    [personalInfo, summary, skills, experience, education, templateId, currentTemplate.name]
  );

  const downloadPdf = () => {
    const name = personalInfo.name || "resume";
    const filename = `${name
      .trim()
      .replace(/\s+/g, "_") || "resume"}-${templateId}.pdf`;

    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    const maxWidth = pageWidth - margin * 2;
    let cursorY = margin;

    const addText = (
      text: string,
      fontSize = 12,
      fontStyle: "normal" | "bold" = "normal",
      color = currentPdfTheme.text
    ) => {
      pdf.setFontSize(fontSize);
      pdf.setTextColor(color);
      pdf.setFont("helvetica", fontStyle);
      const lines = pdf.splitTextToSize(text, maxWidth) as string[];
      lines.forEach((line: string) => {
        if (cursorY + fontSize * 1.4 > pageHeight - margin) {
          pdf.addPage();
          cursorY = margin;
          pdf.setFillColor(currentPdfTheme.background);
          pdf.rect(0, 0, pageWidth, pageHeight, "F");
        }
        pdf.text(line, margin, cursorY);
        cursorY += fontSize * 1.4;
      });
    };

    const addSection = (title: string) => {
      cursorY += 10;
      addText(title, 14, "bold", currentPdfTheme.accent);
      cursorY += 4;
    };

    pdf.setFillColor(currentPdfTheme.background);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");

    addText(personalInfo.name || "Your Name", 20, "bold");
    cursorY += 2;
    const contact = [
      personalInfo.email,
      personalInfo.phone,
      personalInfo.location,
      personalInfo.linkedin,
      personalInfo.github,
    ]
      .filter(Boolean)
      .join(" | ");
    if (contact) {
      addText(contact, 11);
    }

    if (summary) {
      addSection("Professional Summary");
      addText(summary, 11);
    }

    if (experience.length > 0) {
      addSection("Experience");
      experience.forEach((item: Experience) => {
        addText(`${item.role || "Role"} — ${item.company || "Company"}`, 12, "bold");
        const details = [item.duration].filter(Boolean).join(" • ");
        if (details) {
          addText(details, 11);
        }
        cursorY += 4;
      });
    }

    if (education.length > 0) {
      addSection("Education");
      education.forEach((item: Education) => {
        addText(`${item.degree || "Degree"} — ${item.college || "College"}`, 12, "bold");
        const details = [item.year].filter(Boolean).join(" • ");
        if (details) {
          addText(details, 11);
        }
        cursorY += 4;
      });
    }

    if (skills.length > 0) {
      addSection("Skills");
      let skillX = margin;
      const chipHeight = 18;
      skills.forEach((skill: string) => {
        const chipWidth = pdf.getTextWidth(skill) + 14;
        if (skillX + chipWidth > pageWidth - margin) {
          skillX = margin;
          cursorY += chipHeight + 8;
        }
        if (cursorY + chipHeight > pageHeight - margin) {
          pdf.addPage();
          cursorY = margin;
        }
        pdf.setFillColor(currentPdfTheme.badgeBg);
        pdf.roundedRect(skillX, cursorY, chipWidth, chipHeight, 4, 4, "F");
        pdf.setTextColor(currentPdfTheme.badgeText);
        pdf.setFontSize(10);
        pdf.text(skill, skillX + 7, cursorY + 12);
        skillX += chipWidth + 8;
      });
      cursorY += chipHeight + 16;
    }

    pdf.save(filename);
  };

  const saveResume = () => {
    const existing =
      JSON.parse(
        localStorage.getItem("savedResumes") || "[]"
      ) || [];
    existing.push(resumeData);
    localStorage.setItem(
      "savedResumes",
      JSON.stringify(existing)
    );
    router.push("/profile");
  };

  return (
    <div className={`p-8 rounded-lg shadow ${theme.container}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
        <div>
          <p
            className={`text-sm uppercase tracking-[0.2em] font-semibold mb-2 ${theme.accent}`}
          >
            {currentTemplate.name}
          </p>
          <h1 className={`text-4xl font-bold ${theme.heading}`}>
            {personalInfo.name || "Your Name"}
          </h1>
          <p className={`${theme.text} mt-2`}>
            {personalInfo.location}
            {personalInfo.location && personalInfo.email && " • "}
            {personalInfo.email}
            {personalInfo.phone && " • "}
            {personalInfo.phone}
          </p>
          <p className={`${theme.subtext} mt-1`}>
            {personalInfo.linkedin && `LinkedIn: ${personalInfo.linkedin}`}
            {personalInfo.linkedin && personalInfo.github && " • "}
            {personalInfo.github && `GitHub: ${personalInfo.github}`}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveResume}
            className={`${saveButtonClass} px-4 py-3 rounded-lg transition`}
          >
            Save
          </button>
          <button
            onClick={downloadPdf}
            className={`${downloadButtonClass} px-4 py-3 rounded-lg transition`}
          >
            Download PDF
          </button>
        </div>
      </div>

      {summary ? (
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-3 ${theme.accent}`}>
            Professional Summary
          </h2>
          <p className={`${theme.text} whitespace-pre-line`}>
            {summary}
          </p>
        </div>
      ) : null}

      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme.accent}`}>
            Experience
          </h2>
          <div className="space-y-4">
            {experience.length > 0 ? (
              experience.map((item: Experience, idx: number) => (
                <div key={idx}>
                  <p className={`font-semibold ${theme.heading}`}>
                    {item.role || "Role"}
                  </p>
                  <p className={`${theme.text}`}>
                    {item.company || "Company"}
                    {item.duration ? ` • ${item.duration}` : ""}
                  </p>
                </div>
              ))
            ) : (
              <p className={`${theme.subtext}`}>
                Add your work experience on the left.
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme.accent}`}>
            Education
          </h2>
          <div className="space-y-4">
            {education.length > 0 ? (
              education.map((item: Education, idx: number) => (
                <div key={idx}>
                  <p className={`font-semibold ${theme.heading}`}>
                    {item.degree || "Degree"}
                  </p>
                  <p className={`${theme.text}`}>
                    {item.college || "College"}
                    {item.year ? ` • ${item.year}` : ""}
                  </p>
                </div>
              ))
            ) : (
              <p className={`${theme.subtext}`}>
                Add your education history on the left.
              </p>
            )}
          </div>
        </section>
      </div>

      <section className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${theme.accent}`}>
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className={`${skillBadgeClass} px-3 py-1 rounded-full text-sm`}
              >
                {skill}
              </span>
            ))
          ) : (
            <p className={`${theme.subtext}`}>
              Add your core skills on the left.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}



