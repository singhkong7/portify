import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">
        Portify
      </h1>

      <p className="mt-4 text-gray-500">
        Build your resume in minutes
      </p>

      <Link
        href="/templates"
        className="mt-8 px-6 py-3 bg-black text-white rounded"
      >
        Get Started
      </Link>
    </main>
  );
}