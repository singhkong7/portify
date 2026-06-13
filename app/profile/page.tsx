export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        My Resumes
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="border rounded-lg p-5">
          <h2>Professional Resume</h2>

          <button className="bg-black text-white px-4 py-2 rounded mt-4">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}