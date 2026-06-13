import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Portify
        </h1>

        <div className="flex gap-4">
          <Link
            href="/templates"
            className="text-gray-700 hover:text-blue-600"
          >
            Templates
          </Link>

          <Link
            href="/profile"
            className="text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Build Professional Resumes in Minutes
            </span>

            <h1 className="text-6xl font-extrabold mt-6 leading-tight">
              Create Stunning
              <span className="text-blue-600">
                {" "}
                Resumes & Portfolios
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Choose from professional templates,
              customize your information, preview
              instantly, and download a polished PDF.
            </p>

            <div className="flex gap-4 mt-10">
              <Link
                href="/templates"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg"
              >
                Get Started
              </Link>

              <button className="px-8 py-4 border rounded-xl font-semibold hover:bg-gray-100">
                View Templates
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold">
                  15+
                </h3>
                <p className="text-gray-500">
                  Templates
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  PDF
                </h3>
                <p className="text-gray-500">
                  Export
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  100%
                </h3>
                <p className="text-gray-500">
                  Free
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border">
              <div className="h-[600px] bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl flex items-center justify-center">
                <div className="w-[80%] h-[90%] bg-white rounded-lg shadow-lg p-6">
                  <div className="h-8 w-40 bg-blue-500 rounded mb-4"></div>

                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>

                  <div className="mt-8">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>

                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="h-6 w-24 bg-gray-300 rounded mb-4"></div>

                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-blue-100 rounded-full text-xs">
                        React
                      </span>

                      <span className="px-3 py-1 bg-blue-100 rounded-full text-xs">
                        Next.js
                      </span>

                      <span className="px-3 py-1 bg-blue-100 rounded-full text-xs">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-5 -left-5 bg-white shadow-lg px-5 py-3 rounded-xl">
              🎨 15 Templates
            </div>

            <div className="absolute bottom-5 -right-5 bg-white shadow-lg px-5 py-3 rounded-xl">
              📄 PDF Export
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}