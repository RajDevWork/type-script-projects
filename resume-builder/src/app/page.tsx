import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Brain,
  CheckCircle,
  Wand2,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium">
                <Sparkles size={16} />
                AI Resume Builder
              </div>

              <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">
                Build a Resume
                <span className="block text-violet-600">
                  That Gets Interviews
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Create ATS-friendly resumes with AI-powered suggestions,
                professional templates, and recruiter-approved formatting.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/resume"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"
                >
                  Create Resume
                  <ArrowRight size={18} />
                </Link>

                <button className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition">
                  Watch Demo
                </button>
              </div>

              <div className="flex gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold">50K+</h3>
                  <p className="text-slate-500">Resumes Created</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">92%</h3>
                  <p className="text-slate-500">ATS Pass Rate</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="text-slate-500">Successful Hires</p>
                </div>
              </div>
            </div>

            {/* Resume Preview */}

            <div>
              <div className="bg-white border shadow-2xl rounded-3xl p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">
                      ATS Resume Score
                    </h3>

                    <p className="text-slate-500">
                      Recruiter Optimized
                    </p>
                  </div>

                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-600">
                      92
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="h-4 bg-slate-200 rounded-full" />
                  <div className="h-4 bg-slate-200 rounded-full w-5/6" />
                  <div className="h-4 bg-slate-200 rounded-full w-3/4" />
                  <div className="h-4 bg-slate-200 rounded-full w-full" />
                  <div className="h-4 bg-slate-200 rounded-full w-2/3" />
                </div>

                <div className="mt-8 bg-green-50 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  ATS Compatible & Recruiter Approved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Our Builder?
            </h2>

            <p className="mt-4 text-slate-500">
              Everything you need to create a job-winning resume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={<Brain size={28} />}
              title="AI Content Generation"
              description="Generate professional summaries, skills, and work experience instantly."
            />

            <FeatureCard
              icon={<FileText size={28} />}
              title="ATS Friendly"
              description="Built to pass modern Applicant Tracking Systems."
            />

            <FeatureCard
              icon={<Wand2 size={28} />}
              title="Smart Suggestions"
              description="Get recommendations to improve resume quality and impact."
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[40px] p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Land Your Dream Job?
            </h2>

            <p className="mt-4 text-lg opacity-90">
              Create a professional resume in minutes and stand out from the crowd.
            </p>

            <Link
              href="/resume"
              className="inline-flex mt-8 bg-white text-violet-700 px-8 py-4 rounded-2xl font-bold"
            >
              Start Building Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transition">
      <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-slate-500">{description}</p>
    </div>
  );
}