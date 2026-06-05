"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Plus, FileText, Trash2, Briefcase } from "lucide-react";

import {
  createResumeApi,
  deleteResumeApi,
  getAllResumesApi,
} from "@/apis/resume.api";

interface Resume {
  _id: string;
  title: string;
  jobTitle: string;
  experienceLevel: string;
}

export default function ResumePage() {
  const router = useRouter();

  const [resumes, setResumes] = useState<Resume[]>([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    jobTitle: "",
    experienceLevel: "Fresher",
  });

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const data = await getAllResumesApi();

      setResumes(data.resumes || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateResume = async () => {
    try {
      const response = await createResumeApi({
        title: formData.title,
        jobTitle: formData.jobTitle,
        experienceLevel: formData.experienceLevel,
      });

      console.log(response);

      const resumeId = response.data._id;
      console.log("reached...");

      router.push(`/resume/${resumeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (resumeId: string) => {
    try {
      await deleteResumeApi(resumeId);

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

          <div>
            <span className="text-violet-400 text-sm uppercase tracking-[0.3em]">
              Dashboard
            </span>

            <h1 className="text-5xl font-black mt-2">
              My Resumes
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              Create ATS-optimized resumes powered by AI.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 font-semibold hover:scale-105 transition"
          >
            <Plus size={20} />

            Create Resume
          </button>

        </div>

        {/* Empty State */}

        {!loading && resumes.length === 0 && (
          <div className="rounded-[40px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-20
        text-center">
            <FileText
              size={80}
              className="mx-auto text-violet-400"
            />

            <h2 className="text-2xl font-semibold mt-6">No Resume Yet</h2>

            <p className="text-slate-500 mt-2">
              Create your first AI powered resume.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="mt-8
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-8
              py-4
              rounded-2xl
              font-semibold"
            >
              Create Resume
            </button>
          </div>
        )}

        {/* Resume Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="group
rounded-[32px]
border
border-white/10
bg-white/[0.03]
backdrop-blur-2xl
p-6
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500/30
hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-2xl text-white">{resume.title}</h2>

                  <div className="flex items-center gap-2 text-slate-500 mt-2">
                    <Briefcase size={16} />
                    {resume.jobTitle}
                  </div>

                  <span className="inline-block
 mt-4
 px-3
 py-1
 rounded-full
 text-sm
 bg-violet-500/10
 text-violet-300
 border
 border-violet-500/20">
                    {resume.experienceLevel}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(resume._id)}
                  className="rounded-xl
p-2
text-red-400
hover:bg-red-500/10
transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <button
                onClick={() => router.push(`/resume/${resume._id}`)}
                className="mt-6
w-full
rounded-2xl
bg-gradient-to-r
from-violet-600
to-fuchsia-600
py-3
font-semibold
hover:opacity-90
transition"
              >
                Continue Building
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0
bg-black/70
backdrop-blur-md
flex items-center justify-center
px-4
z-50">
          <div className="w-full
max-w-lg
rounded-[40px]
border
border-white/10
bg-[#111827]
p-8
shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Create Resume</h2>

            <div className="space-y-4">
              <input
                placeholder="Resume Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="w-full
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-4
text-white
placeholder:text-slate-500
outline-none
focus:border-violet-500"
              />

              <input
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    jobTitle: e.target.value,
                  })
                }
                className="w-full
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-4
text-white
placeholder:text-slate-500
outline-none
focus:border-violet-500"
              />

              <select
                value={formData.experienceLevel}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experienceLevel: e.target.value,
                  })
                }
                className="w-full
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-4
text-slate-500
placeholder:text-slate-500
outline-none
focus:border-violet-500"
              >
                <option>Fresher</option>

                <option>Junior</option>

                <option>Mid-Level</option>

                <option>Senior</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-3 border rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateResume}
                className="px-6
py-3
rounded-2xl
bg-gradient-to-r
from-violet-600
to-fuchsia-600
text-white
font-semibold"
              >
                Create Resume
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
