import ResumeForm from "@/components/editor/ResumeForm";
import ResumePreview from "@/components/preview/ResumePreview";

export default function EditorPage() {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="p-10 border-r">
        <h1 className="text-3xl font-bold mb-6">
          Resume Editor
        </h1>

        <ResumeForm />
      </div>

      <div className="p-10 bg-gray-100">
        <ResumePreview />
      </div>
    </div>
  );
}