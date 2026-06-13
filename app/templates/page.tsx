import TemplateCard from "@/components/templates/TemplateCard";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Choose Template
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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