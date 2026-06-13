import TemplateCard from "@/components/templates/TemplateCard";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">
          Choose Template
        </h1>

        <button className="px-4 py-2 bg-black text-white rounded-lg">
          My Resumes
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            {...template}
          />
        ))}
      </div>
    </div>
  );
}