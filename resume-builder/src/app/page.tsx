"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Brain,
  CheckCircle,
  FileText,
  Zap,
  Building2,
  ShieldCheck,
  Wand2,
  LayoutTemplate,
  Target,
  BarChart3,
  Quote,
  Check,
  } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081120] text-white">
      {/* Background */}

      <div className="absolute inset-0">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff10 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Aurora Blobs */}

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]"
        />
      </div>

      {/* Navbar */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
            <FileText size={20} />
          </div>

          <span className="text-xl font-bold">
            ResumeAI
          </span>
        </div>

        <div className="hidden gap-8 md:flex text-slate-300">
          <a href="#">Features</a>
          <a href="#">Templates</a>
          <a href="#">ATS Score</a>
          <a href="#">Pricing</a>
        </div>

        <Link
          href="/resume"
          className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-lg"
        >
          Dashboard
        </Link>
      </nav>

      {/* Hero */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={14} />
              AI Powered Resume Builder
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight lg:text-8xl">
              Land More
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Interviews
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl text-slate-400">
              Build recruiter-approved resumes with AI,
              ATS optimization, smart suggestions,
              and premium templates in minutes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/resume"
                className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
              >
                Start Building
                <ArrowRight size={18} />
              </Link>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-lg">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-4xl font-bold">50K+</h3>
                <p className="text-slate-500">
                  Resumes Created
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">96%</h3>
                <p className="text-slate-500">
                  ATS Pass Rate
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">10K+</h3>
                <p className="text-slate-500">
                  Hired Users
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <div className="relative h-[650px]">
            {/* Main Resume */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-0 top-10 w-[420px] rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
            >
              <div className="h-6 w-48 rounded bg-slate-300" />

              <div className="mt-8 space-y-4">
                <div className="h-3 rounded bg-slate-500" />
                <div className="h-3 w-5/6 rounded bg-slate-500" />
                <div className="h-3 w-4/6 rounded bg-slate-500" />
              </div>

              <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18} />
                  ATS Score
                </div>

                <h2 className="mt-2 text-5xl font-bold">
                  96%
                </h2>
              </div>

              <div className="mt-8 space-y-4">
                <div className="h-3 rounded bg-slate-500" />
                <div className="h-3 rounded bg-slate-500" />
                <div className="h-3 w-4/5 rounded bg-slate-500" />
                <div className="h-3 rounded bg-slate-500" />
              </div>
            </motion.div>

            {/* AI Card */}

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-0 top-32 w-72 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Brain className="text-violet-400" />

                <h3 className="font-semibold">
                  AI Suggestions
                </h3>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Improved impact by adding measurable
                achievements and ATS keywords.
              </p>
            </motion.div>

            {/* Optimization Card */}

            <motion.div
              animate={{
                x: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-20 left-10 w-80 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Zap className="text-cyan-400" />

                <h3 className="font-semibold">
                  Resume Optimized
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-slate-400">
                  Match Score
                </span>

                <span className="text-2xl font-bold text-cyan-400">
                  98%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative z-10 border-y border-white/10 py-12 overflow-hidden">
        <div className="text-center text-sm uppercase tracking-[0.3em] text-slate-500 mb-8">
          Trusted By Professionals Targeting
        </div>

        <div className="flex justify-center gap-12 text-slate-400 font-semibold text-lg flex-wrap">
          <span>Google</span>
          <span>Amazon</span>
          <span>Microsoft</span>
          <span>Adobe</span>
          <span>Meta</span>
          <span>Netflix</span>
          <span>Spotify</span>
          <span>Uber</span>
        </div>
      </section>
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black">
              Powered By AI
            </h2>

            <p className="mt-4 text-slate-400 text-lg">
              Everything you need to create a recruiter-winning resume.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            
            <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
              <Brain className="text-violet-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                AI Resume Writer
              </h3>

              <p className="mt-4 text-slate-400">
                Generate summaries, achievements, skills,
                and work experience with AI assistance.
              </p>

              <div className="mt-8 rounded-2xl bg-black/40 p-5">
                <p className="text-green-400">
                  ✓ Increased response rate by 42%
                </p>

                <p className="text-green-400 mt-2">
                  ✓ ATS Keywords Added
                </p>

                <p className="text-green-400 mt-2">
                  ✓ Achievement Driven Content
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <ShieldCheck
                className="text-cyan-400 mb-6"
                size={36}
              />

              <h3 className="text-2xl font-bold">
                ATS Friendly
              </h3>

              <p className="mt-4 text-slate-400">
                Pass modern applicant tracking systems.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <Wand2
                className="text-fuchsia-400 mb-6"
                size={36}
              />

              <h3 className="text-2xl font-bold">
                Smart Suggestions
              </h3>

              <p className="mt-4 text-slate-400">
                Improve content quality instantly.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <Target
                className="text-orange-400 mb-6"
                size={36}
              />

              <h3 className="text-2xl font-bold">
                Job Matching
              </h3>

              <p className="mt-4 text-slate-400">
                Match your resume against job descriptions.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <LayoutTemplate
                className="text-green-400 mb-6"
                size={36}
              />

              <h3 className="text-2xl font-bold">
                Templates
              </h3>

              <p className="mt-4 text-slate-400">
                Premium recruiter-approved layouts.
              </p>
            </div>

            <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-10">
              <BarChart3
                className="text-cyan-400 mb-6"
                size={40}
              />

              <h3 className="text-3xl font-bold">
                Real-Time Resume Analytics
              </h3>

              <p className="mt-4 text-slate-400">
                Analyze readability, ATS score,
                formatting, keywords, and impact.
              </p>

              <div className="mt-8 flex gap-4">
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  ATS: 96%
                </div>

                <div className="rounded-xl bg-white/10 px-4 py-3">
                  Readability: 94%
                </div>

                <div className="rounded-xl bg-white/10 px-4 py-3">
                  Impact: 98%
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-black">
              Professional Templates
            </h2>

            <p className="mt-4 text-slate-400">
              Designed to impress recruiters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:scale-105 transition"
              >
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 p-6">
                  <div className="h-5 w-40 bg-slate-500 rounded" />

                  <div className="space-y-3 mt-8">
                    <div className="h-2 bg-slate-600 rounded" />
                    <div className="h-2 bg-slate-600 rounded w-4/5" />
                    <div className="h-2 bg-slate-600 rounded w-3/5" />
                  </div>

                  <div className="space-y-3 mt-10">
                    <div className="h-2 bg-slate-600 rounded" />
                    <div className="h-2 bg-slate-600 rounded w-5/6" />
                    <div className="h-2 bg-slate-600 rounded w-2/3" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Modern Template {item}
                </h3>

                <p className="text-slate-400 mt-2">
                  ATS optimized and recruiter approved.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <div className="text-center">
              <h2 className="text-5xl font-black">
                ATS Optimization Score
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              {[
                ["Keywords", "98%"],
                ["Formatting", "95%"],
                ["Readability", "94%"],
                ["Impact", "97%"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-black/30 p-8 text-center"
                >
                  <h3 className="text-slate-400">
                    {title}
                  </h3>

                  <p className="mt-4 text-4xl font-bold text-cyan-400">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black">
        AI Transformation
      </h2>

      <p className="mt-4 text-slate-400">
        Turn average resumes into interview magnets.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 mt-16">

      {/* Before */}

      <div className="rounded-[32px] border border-red-500/20 bg-red-500/5 p-8">
        <div className="inline-flex rounded-full bg-red-500/20 px-4 py-2 text-red-400">
          Before
        </div>

        <ul className="mt-8 space-y-5 text-slate-400">
          <li>• Team Player</li>
          <li>• Hard Working</li>
          <li>• Good Communication</li>
          <li>• Responsible for Development</li>
          <li>• Worked on Projects</li>
        </ul>
      </div>

      {/* After */}

      <div className="rounded-[32px] border border-green-500/20 bg-green-500/5 p-8">
        <div className="inline-flex rounded-full bg-green-500/20 px-4 py-2 text-green-400">
          After AI Optimization
        </div>

        <ul className="mt-8 space-y-5">
          <li className="text-green-400">
            ✓ Increased user retention by 34%
          </li>

          <li className="text-green-400">
            ✓ Reduced load time by 42%
          </li>

          <li className="text-green-400">
            ✓ Led team of 5 engineers
          </li>

          <li className="text-green-400">
            ✓ Delivered 12+ production projects
          </li>

          <li className="text-green-400">
            ✓ Optimized application performance
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black">
        Loved By Professionals
      </h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          name: "Sarah Johnson",
          role: "Frontend Engineer",
        },
        {
          name: "David Smith",
          role: "Product Manager",
        },
        {
          name: "Alex Carter",
          role: "Software Engineer",
        },
      ].map((item) => (
        <div
          key={item.name}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <Quote className="text-violet-400" />

          <p className="mt-6 text-slate-300">
            This AI resume builder helped me
            completely transform my resume and
            land interviews within weeks.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-slate-500">
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative z-10 py-32">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black">
        Simple Pricing
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Free */}

      <div className="rounded-[40px] border border-white/10 bg-white/5 p-10">
        <h3 className="text-3xl font-bold">
          Free
        </h3>

        <div className="mt-6 text-6xl font-black">
          ₹0
        </div>

        <div className="mt-8 space-y-4">
          <p>✓ 1 Resume</p>
          <p>✓ ATS Score</p>
          <p>✓ PDF Export</p>
        </div>
      </div>

      {/* Pro */}

      <div className="rounded-[40px] border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-cyan-500/10 p-10">

        <div className="inline-flex rounded-full bg-violet-500/20 px-4 py-2 text-violet-300">
          Most Popular
        </div>

        <h3 className="mt-4 text-3xl font-bold">
          Pro
        </h3>

        <div className="mt-6 text-6xl font-black">
          ₹299
        </div>

        <div className="mt-8 space-y-4">
          <p>✓ Unlimited Resumes</p>
          <p>✓ AI Suggestions</p>
          <p>✓ Premium Templates</p>
          <p>✓ Resume Analytics</p>
          <p>✓ Job Match Score</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 py-32">
  <div className="max-w-6xl mx-auto px-6">

    <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 p-16 text-center">

      <div className="absolute inset-0 backdrop-blur-3xl" />

      <div className="relative">
        <Sparkles
          size={50}
          className="mx-auto text-violet-400"
        />

        <h2 className="mt-8 text-5xl md:text-7xl font-black">
          Your Next Interview
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Starts Here
          </span>
        </h2>

        <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
          Create a recruiter-approved resume
          powered by AI and land more interviews.
        </p>

        <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold hover:bg-violet-500 transition">
          Create Resume

          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
</section>
<footer className="relative z-10 border-t border-white/10 py-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

    <div>
      <h3 className="text-2xl font-bold">
        ResumeAI
      </h3>

      <p className="text-slate-500 mt-2">
        AI Powered Resume Builder
      </p>
    </div>

    <div className="flex gap-8 mt-6 md:mt-0 text-slate-400">
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Templates</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>
    </main>
  );
}