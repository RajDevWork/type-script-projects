 # ResumeAI

 ResumeAI is a modern AI-powered resume builder built with Next.js, TypeScript, and MongoDB. It helps users create, manage, and improve resumes with AI-generated content, ATS score evaluation, and step-by-step resume creation flows.

 ## Features

 - User authentication with registration and login
 - Resume dashboard for creating, deleting, and continuing resumes
 - Step-by-step resume builder for:
   - personal information
   - education
   - skills
   - projects
   - work experience
 - AI-assisted resume improvements:
   - resume summary generation
   - project description generation
   - skills generation
   - experience description generation
   - ATS score evaluation
 - Secure backend using JWT and MongoDB
 - Modern UI with Tailwind CSS and Framer Motion animations

 ## Tech Stack

 - Next.js 16
 - React 19
 - TypeScript
 - Tailwind CSS v4
 - MongoDB with Mongoose
 - Google Gemini AI (`@google/genai`)
 - Auth with JWT and secure HTTP-only cookies
 - React Hook Form for client-side forms
 - Framer Motion for UI animations

 ## Project Structure

 - `src/app` - main Next.js app routes and pages
 - `src/components` - reusable form and step components
 - `src/apis` - client-side API wrappers
 - `src/app/api` - Next.js server API routes
 - `src/lib` - shared utilities for DB, auth, and AI
 - `src/models` - Mongoose models for User and Resume
 - `src/types` - TypeScript data types and API interfaces

 ## Getting Started

 ### Prerequisites

 - Node.js 20+ installed
 - npm or pnpm
 - MongoDB database access
 - Google Gemini API key

 ### Install

 ```bash
 cd resume-builder
 npm install
 ```

 ### Environment Variables

 Create a `.env` file in the project root with the following variables:

 ```env
 MONGO_URI=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret
 GEMINI_API_KEY=your_google_gemini_api_key
 ```

 ### Run Locally

 ```bash
 npm run dev
 ```

 Open `http://localhost:3000` in your browser.

 ## Usage

 1. Register a new account or log in.
 2. Go to the resume dashboard.
 3. Create a new resume and continue building it.
 4. Fill in personal info, education, skills, projects, and experience.
 5. Use AI-powered generation features to improve your resume content.
 6. Review the ATS score and make iterative changes.

 ## API Routes

 - `POST /api/auth/register` — register a new user
 - `POST /api/auth/login` — authenticate and receive a session cookie
 - `GET /api/resume` — fetch current user resumes
 - `POST /api/resume/create` — create a new resume record
 - `DELETE /api/resume/:resumeId` — delete a resume
 - `POST /api/ai/generate-summary` — generate an ATS-friendly resume summary
 - `POST /api/ai/generate-skills` — generate skills for resume optimization
 - `POST /api/ai/generate-project-description` — generate project descriptions
 - `POST /api/ai/generate-experience-description` — generate work experience descriptions
 - `POST /api/ai/improve-content` — improve existing resume text for ATS
 - `POST /api/ai/ats-score` — evaluate resume ATS readiness

 ## Environment Notes

 - `MONGO_URI` powers MongoDB connection via `src/lib/mongodb.ts`
 - `JWT_SECRET` secures user tokens via `src/lib/jwt.ts`
 - `GEMINI_API_KEY` is used by `src/lib/gemini.ts` for AI content generation

 ## Scripts

 - `npm run dev` — start development server
 - `npm run build` — build production assets
 - `npm run start` — start the production server

 ## Contributing

 - Add new resume builder steps or AI generation routes
 - Improve form validation and error handling
 - Add resume preview and export features
 - Add end-to-end tests for auth and resume creation

 ## Notes

 This project is designed as a full-stack Next.js application with server-side API routes and client-side resume-building flow. It can serve as a strong base for expanding into a complete ATS resume tool with templates, PDF export, and user analytics.