"use client";

import React from "react";

export default function Page() {
  const skills = [
    "C#",
    ".NET Core",
    "Next.js",
    "TypeScript",
    "SQL",
    "Tailwind CSS",
    "Figma",
    "GitHub",
  ];

  const projects = [
    {
      name: "TimeBank",
      focus: "view my project",

      desc: "A community-driven skill-swap platform architected with a robust credit transfer system.",
      url: "https://github.com/PallaviPattanashetti/TimeBank",
    },
    {
      name: "Pokémon Hub",
      focus: "view my project",

      desc: "A high-speed data hub focused on complex state management and seamless API integration.",
      url: "https://pokemangame-h79c-git-main-pallavipattanashettis-projects.vercel.app",
    },
    {
      name: "Influence Site",
      focus: "view my project",

      desc: "A deep dive into structural hierarchy and clean, responsive interface design.",
      url: "https://influentialperson-git-main-pallavipattanashettis-projects.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900">
      <main className="mx-auto max-w-5xl px-6 pt-20">
        <header className="mb-20">
          <p className="mb-2 text-xl font-bold text-slate-500">
            Pallavi Pattanashetti
          </p>
          <h1 className="mb-6 text-5xl leading-tight font-black md:text-6xl">
            Software Engineer <br />
            <span className="text-blue-600">& Former Educator</span>
          </h1>

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-2xl border-l-4 border-blue-600 pl-6 text-lg text-slate-600 italic">
              My background in teaching gave me a unique lens for logic: I do
              not just write code; I architect systems that are clear,
              organized, and purposeful.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        </header>

        <div className="mb-24 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">The Journey</h2>
            <div className="space-y-4 text-slate-700">
              
              "My professional journey is defined by two deep dives: first as an
              <strong>Educator</strong>, where I mastered the art of breaking down complex
              concepts, and second as a <strong>Full-Stack Developer</strong>, where I now build
              the digital systems that handle that complexity. This transition
              has forged my core philosophy of<strong>Functional Transparency</strong> —the
              belief that code, much like a lesson plan, should be clean,
              logical, and inherently easy to navigate. I don't just build
              applications; I architect clear pathways between sophisticated
              backend logic and intuitive frontend interfaces. My goal is to
              ensure that the technology I create empowers the user by removing
              friction, making the most advanced tools feel simple and
              accessible."
            </div>
          </div>

          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Core Philosophy</h2>
            
            "Transitioning from a <strong>career in Teaching to Full-Stack Development</strong>
            has given me a unique perspective on the digital lifecycle: I have
            dived deep into both the human psychology of learning and the
            technical rigor of software engineering. My core philosophy is
            rooted in <strong>Structural Empathy</strong>, which means I write every line of
            backend code with the end-user's 'aha!' moment in mind. By bridging
            the gap between robust database management and responsive UI design,
            I ensure that my applications are not only technically sound but
            also educationally intuitive. I believe that the best software
            doesn't just perform a task; it teaches the user how to succeed
            through a seamless and supportive digital experience."
          </div>
        </div>

        <div className="mb-24">
          <h2 className="mb-10 text-center text-3xl font-black">
            Technical Stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 font-bold text-blue-600">Languages</h3>
              <p className="text-sm text-slate-600">
                C#, TypeScript, JavaScript, HTML, CSS
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 font-bold text-blue-600">Front-End</h3>
              <p className="text-sm text-slate-600">
                Next.js, React, Tailwind CSS
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 font-bold text-blue-600">Back-End</h3>
              <p className="text-sm text-slate-600">
                ASP.NET Core, Web API, Node.js
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 font-bold text-blue-600">Design & Tools</h3>
              <p className="text-sm text-slate-600">
                Figma, Git, GitHub, Postman
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 font-bold text-blue-600">Deployment</h3>
              <p className="text-sm text-slate-600">Vercel, Azure</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="mb-10 text-3xl font-black">Now and Next Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-blue-600">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-slate-600">{project.desc}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Focus
                    </p>
                    <p className="font-medium text-slate-800">
                      {project.focus}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="mb-10 text-3xl font-black">Let's Connect</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href="mailto:Pallavi.Pattanashetti@gmail.com"
              className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Email
                </p>
                <p className="text-lg font-semibold">
                  Pallavi.Pattanashetti@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/PallaviPattanashetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                in
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  LinkedIn
                </p>
                <p className="text-lg font-semibold">View Profile</p>
              </div>
            </a>

            <div className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Phone
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  650-868-5268
                </p>
              </div>
            </div>

            <a
              href="https://github.com/PallaviPattanashetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  GitHub
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  View Projects
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-10 text-white">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Education & Training</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-blue-400">
                    Software Engineering Fellowship
                  </p>
                  <p className="text-sm text-slate-400">Code Stack Academy</p>
                </div>
                <div>
                  <p className="font-bold text-blue-400">
                    Master of Arts in English Literature
                  </p>
                  <p className="text-sm text-slate-400">
                    Professional background in structured analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-fit flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-white/10 px-3 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-lg font-black tracking-tighter">
                  PALLAVI <span className="text-blue-600">PATTANASHETTI</span>
                </p>
                <p className="text-sm font-medium text-slate-500">
                  Software Engineer | educator at heart.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden h-px w-8 bg-slate-300 md:block"></div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  &copy; {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
