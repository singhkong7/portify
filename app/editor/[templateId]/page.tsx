"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import ResumeForm from "@/app/editor/ResumeForm";
import ResumePreview from "@/components/preview/ResumePreview";
import { templates } from "@/data/templates";

function useLocation() {
  const pathname = usePathname();
  return useMemo(() => ({ pathname }), [pathname]);
}

export default function EditorPage() {
  const { pathname } = useLocation();
  const templateId = pathname?.split("/").pop() || "";
  const currentTemplate = templates.find(
    (template) => String(template.id) === templateId
  );
  
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="p-10 border-r">
        <h1 className="text-3xl font-bold mb-6">
          {currentTemplate
            ? `${currentTemplate.name} Resume`
            : `Template ${templateId}`}
        </h1>

        <ResumeForm />
      </div>

      <div className="p-10 bg-gray-100">
        <ResumePreview templateId={templateId} />
      </div>
    </div>
  );
}