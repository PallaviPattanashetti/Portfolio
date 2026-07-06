"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-reveal system
    const els = document.querySelectorAll(".reveal, .book");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    els.forEach((el) => io.observe(el));

    // Scroll progress bar
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      if (bar) bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Pointer parallax on hero (layered depth)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const collage = document.querySelector<HTMLElement>(".hero-collage");
    let onMove: ((e: MouseEvent) => void) | null = null;
    if (collage && !reduce) {
      const layers = collage.querySelectorAll<HTMLElement>("[data-depth]");
      onMove = (e: MouseEvent) => {
        const r = collage.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        layers.forEach((l) => {
          const depth = parseFloat(l.getAttribute("data-depth") || "0");
          l.style.setProperty("--px", `${dx * depth * 14}px`);
          l.style.setProperty("--py", `${dy * depth * 14}px`);
        });
      };
      window.addEventListener("mousemove", onMove);
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (onMove) window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const projects = [
    {
      name: "ActBridge",
      role: "Founder, Design and Build",
      desc: "My own idea, brought to life with Claude. A community platform that connects volunteers with opportunities, and helps high school and college students find meaningful ways to give back and build experience.",
      url: "https://actbridge.pavil.co/dashboard",
    },
    {
      name: "Aadya Together",
      role: "Design, Build and Deploy",
      desc: "A community website I built from scratch, handling the design, development, and deployment on my own. It powers Aadya, a Manteca-based initiative celebrating Indian culture through festivals and charitable work. Built with Next.js and PostgreSQL, it is warm, accessible, and made to connect a community.",
      url: "https://www.aadyatogether.org/",
    },
    {
      name: "TimeBank",
      role: "Project Lead",
      desc: "My full stack capstone project at CodeStack Academy, a community platform where people trade skills and time instead of money. As project lead of a four-person team, I drove most of the frontend build and worked closely with my teammates to plan what to build and how to approach it, guiding the project from concept to launch.",
      url: "https://newfrontend-lemon.vercel.app",
    },
    {
      name: "Pokémon Hub",
      role: "UI Design and Build",
      desc: "A fast, data-rich app built around complex state management and live API integration. Every interaction had to feel instant and reliable.",
      url: "https://pokemangame-h79c-git-main-pallavipattanashettis-projects.vercel.app",
    },
    {
      name: "Influence Site",
      role: "UI Design and Build",
      desc: "A clean, responsive site focused on hierarchy and readability. The goal was to let the content breathe while keeping the structure sharp.",
      url: "https://influentialperson.vercel.app",
    },
    {
      name: "All For One",
      role: "UI Design and Build",
      desc: "A responsive Next.js web app focused on clean layout, clear hierarchy, and a smooth, accessible user experience across devices.",
      url: "https://allforonenextjs-ou1m.vercel.app",
    },
  ];

  const stack = [
    {
      category: "Languages",
      icon: "code",
      items: ["C#", "TypeScript", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frameworks",
      icon: "layers",
      items: ["React", "Next.js", ".NET", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      icon: "server",
      items: ["ASP.NET Core", "Web API", "Node.js", "REST APIs"],
    },
    {
      category: "Cloud and Data",
      icon: "cloud",
      items: ["Microsoft Azure", "SQL Server", "Vercel", "Railway"],
    },
    {
      category: "Design",
      icon: "palette",
      items: ["Figma", "Google Stitch", "Responsive Web Design"],
    },
    {
      category: "Tools and Practice",
      icon: "tools",
      items: ["Git/GitHub", "Visual Studio", "Postman", "Swagger", "Agile/Scrum"],
    },
  ];

  const experience = [
    {
      role: "Software Engineer and Intern",
      org: "CodeStack Academy",
      period: "Sep 2025 – Jun 2026",
      desc: "Completed 1,300+ hours of intensive software engineering training in React, Next.js, C#, and .NET, including 300+ hours of internship experience on Stockfolio, CodeStack's internal application, contributing across both the API and client codebases. Also led TimeBank, my full stack capstone, from concept through deployment.",
    },
    {
      role: "Math Kangaroo Manager",
      org: "Manteca Learning Center",
      period: "2023 – 2025",
      desc: "Opened a learning center welcoming students who wanted to prepare for and attend the international Math Kangaroo exam, coordinating registration and exam-day logistics.",
    },
    {
      role: "Substitute Teacher",
      org: "Manteca Unified School District",
      period: "2024 – 2025",
      desc: "Adapted quickly across classrooms and subjects, keeping students engaged and lessons on track. The same clarity and structure I bring to code.",
    },
    {
      role: "Teacher",
      org: "India",
      period: "2007 – 2010",
      desc: "Taught across subjects and age groups, building the instinct to break hard ideas into simple, understandable steps.",
    },
  ];

  const certifications = [
    "Claude 101 (Anthropic, Apr 2026)",
    "AI Fluency for Educators (Anthropic, Apr 2026)",
    "AI Fluency: Framework and Foundations (Anthropic, Apr 2026)",
  ];

  const stackIcons: Record<string, React.ReactNode> = {
    code: (
      <path d="M8 6L3 12l5 6M16 6l5 6-5 6M13.5 4l-3 16" />
    ),
    layers: (
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" />
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    cloud: (
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.5h10.5z" />
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.5 1.7-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7z" />
        <path d="M7.5 12h.01M10 8h.01M14 7.5h.01M17 10h.01" />
      </>
    ),
    tools: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-2.3 2.6-2.6z" />
    ),
  };

  const contactIcons: Record<string, React.ReactNode> = {
    email: (
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zM4 8v10h16V8l-8 5-8-5z" />
    ),
    linkedin: (
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.3a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.04a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19z" />
    ),
    github: (
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 1.7 2.6 1.3.1-.7.4-1.2.7-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.8 18 5.1 18 5.1c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    ),
    phone: (
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
    ),
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#FAFAF8",
        color: "#1A1A1A",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .nav-link { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; color: #666; transition: color 0.2s; }
        .nav-link:hover { color: #2563EB; }
        .btn { display: inline-block; background: #1A1A1A; color: white; padding: 13px 26px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 4px; transition: background 0.2s, transform 0.2s, box-shadow 0.2s; text-decoration: none; }
        .btn:hover { background: #2563EB; transform: translateY(-2px); box-shadow: 0 10px 24px rgba(37,99,235,0.28); }

        .proj-card { display: block; text-decoration: none; color: inherit; background: white; border: 1px solid #E8E5DF; border-radius: 12px; padding: 28px 30px; transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .proj-card:hover { border-color: #2563EB; box-shadow: 0 10px 30px rgba(37,99,235,0.12); transform: translateY(-3px); }
        .proj-card:hover .proj-name { color: #2563EB; }
        .proj-card:hover .proj-arrow { color: #2563EB; transform: translateX(4px); }
        .proj-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; transition: color 0.2s; }
        .proj-arrow { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 900; color: #D8D4CC; flex-shrink: 0; transition: color 0.25s, transform 0.25s; }
        .proj-preview { flex: 0 0 240px; width: 240px; border: 1px solid #E8E5DF; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 6px 18px rgba(0,0,0,0.06); transition: box-shadow 0.25s, transform 0.25s; }
        .proj-card:hover .proj-preview { box-shadow: 0 12px 28px rgba(37,99,235,0.16); transform: translateY(-2px); }
        .proj-preview-bar { height: 24px; background: #F1EFEA; display: flex; align-items: center; gap: 6px; padding: 0 10px; border-bottom: 1px solid #E8E5DF; }
        .proj-preview-bar span { width: 8px; height: 8px; border-radius: 50%; background: #D0CCC4; }
        .proj-preview-viewport { position: relative; width: 240px; height: 160px; overflow: hidden; background: #FAFAF8; }
        .proj-preview-viewport iframe { position: absolute; top: 0; left: 0; width: 960px; height: 640px; border: 0; transform: scale(0.25); transform-origin: top left; pointer-events: none; }
        @media (max-width: 640px) { .proj-preview, .proj-preview-viewport { width: 100%; } .proj-preview-viewport iframe { transform: scale(0.35); } }

        .card-hover { background: white; border: 1px solid #E8E5DF; border-radius: 12px; padding: 30px; transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .card-hover:hover { border-color: #2563EB; box-shadow: 0 10px 30px rgba(37,99,235,0.10); transform: translateY(-3px); }

        /* Experience — teaching light background + timeline motion */
        .exp-wrap { position: relative; overflow: hidden; border-radius: 20px; padding: 34px; border: 1px solid #ECE8E0; background: linear-gradient(135deg, #FFFDF7 0%, #F3F6FF 52%, #FBF6EF 100%); }
        .exp-wrap::before { content: ""; position: absolute; inset: 0; background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 37px, rgba(37,99,235,0.055) 38px); -webkit-mask-image: linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent); mask-image: linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent); pointer-events: none; z-index: 0; }
        .exp-orb { position: absolute; border-radius: 50%; filter: blur(42px); opacity: 0.5; z-index: 0; pointer-events: none; animation: expFloat 13s ease-in-out infinite; }
        .exp-orb.a { width: 220px; height: 220px; top: -60px; right: -40px; background: radial-gradient(circle, rgba(37,99,235,0.38), transparent 70%); }
        .exp-orb.b { width: 190px; height: 190px; bottom: -60px; left: -40px; background: radial-gradient(circle, rgba(255,176,92,0.32), transparent 70%); animation-delay: -4.5s; }
        .exp-orb.c { width: 150px; height: 150px; top: 42%; left: 46%; background: radial-gradient(circle, rgba(124,164,255,0.28), transparent 70%); animation-delay: -8.5s; }
        @keyframes expFloat { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-26px) translateX(10px); } }
        .exp-list { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 14px; }
        .exp-card { position: relative; overflow: hidden; background: rgba(255,255,255,0.72); backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px); border: 1px solid rgba(232,229,223,0.9); border-radius: 14px; padding: 26px 28px 26px 34px; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
        .exp-card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(#2563EB, #86a6ff); transform: scaleY(0); transform-origin: top; transition: transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s; z-index: 2; }
        .exp-card.in-view::before { transform: scaleY(1); }
        .exp-card::after { content: ""; position: absolute; top: 0; left: -70%; width: 55%; height: 100%; background: linear-gradient(100deg, transparent, rgba(37,99,235,0.10), transparent); transform: skewX(-18deg); transition: left 0.8s ease; pointer-events: none; z-index: 1; }
        .exp-card:hover { transform: translateX(5px); box-shadow: 0 16px 38px rgba(37,99,235,0.14); border-color: rgba(37,99,235,0.4); }
        .exp-card:hover::after { left: 145%; }

        .about-card { position: relative; overflow: hidden; padding: 36px 34px; }
        .about-quote { position: absolute; top: 2px; right: 20px; font-family: 'Playfair Display', serif; font-size: 6.5rem; line-height: 1; font-weight: 900; pointer-events: none; user-select: none; }
        .about-tag { display: inline-block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; margin-bottom: 20px; }
        .about-stats { display: flex; gap: 26px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #F0EEE9; flex-wrap: wrap; }
        .about-stat b { font-family: 'Playfair Display', serif; font-size: 1.55rem; font-weight: 900; color: #1A1A1A; display: block; line-height: 1; margin-bottom: 5px; }
        .about-stat span { font-size: 0.64rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #999; }
        .about-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 14px; }
        .about-sign { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 20px; opacity: 0.92; }

        /* Story: storybook page */
        .story-card { border-left: 5px solid #2563EB; background-image: linear-gradient(135deg, rgba(255,253,249,0.93), rgba(246,242,233,0.90)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80'); background-size: cover; background-position: center; }
        .story-text { font-size: 0.94rem; color: #444; line-height: 1.85; }
        .story-text::first-letter { font-family: 'Playfair Display', serif; font-size: 3.6rem; font-weight: 900; color: #2563EB; float: left; line-height: 0.82; padding: 6px 12px 0 0; }
        .story-card .about-stat b { color: #1A1A1A; }

        /* Philosophy: books / library background */
        .philo-card { border-left: 5px solid #1A1A1A; background-image: linear-gradient(150deg, rgba(37,99,235,0.90), rgba(26,26,26,0.86)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80'); background-size: cover; background-position: center; }
        @property --ai-a { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
        .contact-card { position: relative; overflow: hidden; text-decoration: none; color: inherit; background: white; border: 1px solid #E8E5DF; border-radius: 14px; transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; }
        .contact-card::before { content: ""; position: absolute; top: 0; left: -70%; width: 60%; height: 100%; background: linear-gradient(100deg, transparent, rgba(37,99,235,0.12), transparent); transform: skewX(-18deg); transition: left 0.75s ease; pointer-events: none; z-index: 3; }
        .contact-card:hover::before { left: 135%; }
        .contact-card:hover { border-color: rgba(37,99,235,0.5); box-shadow: 0 16px 40px rgba(37,99,235,0.16); transform: translateY(-4px); }
        .contact-card:hover .contact-arrow { color: #2563EB; opacity: 1; transform: translate(3px, -3px); }
        .contact-icon { position: relative; display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 60px; height: 60px; border-radius: 16px; color: #2563EB; isolation: isolate; transition: color 0.3s; }
        .contact-icon svg { position: relative; z-index: 2; width: 30px; height: 30px; fill: currentColor; transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1); }
        .contact-icon::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 2px; background: conic-gradient(from var(--ai-a), #2563EB, #86a6ff, #2563EB, #1e3a8a, #2563EB); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0.4; animation: aiSpin 6s linear infinite; z-index: 1; transition: opacity 0.3s; }
        .contact-icon::after { content: ""; position: absolute; inset: 2px; border-radius: 14px; background: #F2F0EB; z-index: 1; transition: background 0.3s; }
        .contact-card:hover .contact-icon { color: #fff; }
        .contact-card:hover .contact-icon::before { opacity: 1; }
        .contact-card:hover .contact-icon::after { background: #2563EB; }
        .contact-card:hover .contact-icon svg { transform: scale(1.14) rotate(-6deg); }
        @keyframes aiSpin { to { --ai-a: 360deg; } }
        .contact-arrow { flex-shrink: 0; font-size: 1.2rem; font-weight: 700; color: #C8C4BC; opacity: 0.7; transition: color 0.25s, transform 0.25s, opacity 0.25s; }

        .stack-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }
        .stack-card { background: white; border: 1px solid #E8E5DF; border-radius: 14px; padding: 24px; transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .stack-card:hover { border-color: #2563EB; box-shadow: 0 12px 30px rgba(37,99,235,0.10); transform: translateY(-3px); }
        .stack-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .stack-ico { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: rgba(37,99,235,0.10); color: #2563EB; flex-shrink: 0; transition: background 0.25s, color 0.25s; }
        .stack-card:hover .stack-ico { background: #2563EB; color: #fff; }
        .stack-ico svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .stack-cat { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #2563EB; }
        .stack-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .stack-pill { font-size: 0.82rem; font-weight: 600; color: #333; background: #F5F3EE; border: 1px solid #E8E5DF; border-radius: 999px; padding: 6px 13px; transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .stack-card:hover .stack-pill { border-color: rgba(37,99,235,0.25); }
        .stack-pill:hover { background: #2563EB; color: #fff; border-color: #2563EB; }

        /* Scroll progress bar */
        #scroll-progress { position: fixed; top: 0; left: 0; height: 3px; width: 0%; background: #2563EB; z-index: 100; transition: width 0.08s linear; }

        /* Reveal / motion system */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes fadeInOnly { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes flashGlow {
          0% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
          35% { box-shadow: 0 0 0 3px rgba(37,99,235,0.30), 0 14px 34px rgba(37,99,235,0.22); }
          100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }

        .reveal { opacity: 0; transform: translateY(38px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); will-change: opacity, transform; }
        .reveal.left { transform: translateX(-56px); }
        .reveal.right { transform: translateX(56px); }
        .reveal.scale { transform: scale(0.9); }
        .reveal.in-view { opacity: 1; transform: none; }
        .flash.in-view { animation: flashGlow 1.1s ease 0.15s; }

        /* Book-open reveal (page swings in from the spine) */
        .book { opacity: 0; transition: opacity 0.8s ease, transform 0.95s cubic-bezier(0.34,1.2,0.5,1); transform-style: preserve-3d; will-change: opacity, transform; }
        .book.page-left { transform-origin: right center; transform: perspective(1300px) rotateY(-46deg); }
        .book.page-right { transform-origin: left center; transform: perspective(1300px) rotateY(46deg); }
        .book.in-view { opacity: 1; transform: perspective(1300px) rotateY(0deg); }

        .hero-text { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both; }

        /* Advanced hero: layered pointer parallax + brand duotone */
        .hero-collage { position: relative; flex: 0 0 320px; height: 400px; perspective: 900px; }
        .hero-blob { position: absolute; width: 250px; height: 250px; top: 60px; left: 24px; border-radius: 50%; background: radial-gradient(circle at 32% 30%, rgba(37,99,235,0.40), rgba(37,99,235,0) 70%); filter: blur(6px); z-index: 0; transform: translate(var(--px,0px), var(--py,0px)); transition: transform 0.5s ease; }
        .hero-ring { position: absolute; top: 34px; left: 16px; width: 74px; height: 74px; border: 2px dashed rgba(37,99,235,0.55); border-radius: 50%; z-index: 3; animation: spin 18s linear infinite; transform: translate(var(--px,0px), var(--py,0px)); }
        .hero-frame { position: absolute; z-index: 2; border-radius: 18px; overflow: hidden; border: 7px solid #fff; box-shadow: 0 26px 60px rgba(26,26,26,0.22); background: #fff; transform: translate(var(--px,0px), var(--py,0px)) rotate(var(--rot,0deg)); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease; animation: fadeInOnly 0.9s both; }
        .hero-frame img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(0.2) contrast(1.04); transition: filter 0.5s ease; }
        .hero-frame.main { perspective: 1000px; }
        .flip-inner { position: absolute; inset: 0; transform-style: preserve-3d; animation: heroFlip 9s ease-in-out infinite; }
        .flip-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }
        @keyframes heroFlip { 0%, 42% { transform: rotateY(0deg); } 50%, 92% { transform: rotateY(180deg); } 100% { transform: rotateY(360deg); } }
        .hero-frame::after { content: ""; position: absolute; inset: 0; z-index: 3; background: linear-gradient(150deg, rgba(37,99,235,0.32), rgba(26,26,26,0.10) 65%); mix-blend-mode: multiply; transition: opacity 0.5s ease; }
        .hero-frame:hover img { filter: grayscale(0) contrast(1.04); }
        .hero-frame:hover::after { opacity: 0; }
        .hero-frame.main { --rot: -3deg; width: 260px; height: 330px; top: 30px; right: 10px; }
        .hero-badge-float { position: absolute; z-index: 4; bottom: -4px; right: 18px; background: #2563EB; color: #fff; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 10px 16px; border-radius: 10px; box-shadow: 0 14px 32px rgba(37,99,235,0.38); transform: translate(var(--px,0px), var(--py,0px)); transition: transform 0.3s ease; animation: fadeInOnly 0.9s 0.3s both; }

        /* Editorial mosaic gallery */
        .mosaic { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; margin-bottom: 80px; }
        .g-card { position: relative; border-radius: 18px; overflow: hidden; box-shadow: 0 22px 55px rgba(26,26,26,0.16); }
        .g-card img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(1) contrast(1.03); transform: scale(1.02); transition: filter 0.6s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1); }
        .g-card:hover img { filter: grayscale(0); transform: scale(1.07); }
        .g-duo { position: absolute; inset: 0; background: linear-gradient(150deg, rgba(37,99,235,0.55), rgba(26,26,26,0.55)); mix-blend-mode: multiply; transition: opacity 0.5s ease; }
        .g-card:hover .g-duo { opacity: 0; }
        .g-num { position: absolute; top: 14px; left: 18px; font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; color: #fff; text-shadow: 0 2px 14px rgba(0,0,0,0.4); }
        .g-corner { position: absolute; top: 18px; right: 18px; width: 10px; height: 10px; border-top: 2px solid #fff; border-right: 2px solid #fff; opacity: 0.8; transition: width 0.4s ease, height 0.4s ease; }
        .g-card:hover .g-corner { width: 22px; height: 22px; }
        .g-meta { position: absolute; left: 0; right: 0; bottom: 0; padding: 18px 20px; background: linear-gradient(to top, rgba(26,26,26,0.85), transparent); }
        .g-label { font-family: 'Playfair Display', serif; font-weight: 900; color: #fff; font-size: 1.2rem; }
        .g-cap { font-size: 0.8rem; color: rgba(255,255,255,0.85); line-height: 1.4; max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.45s ease, opacity 0.45s ease, margin-top 0.45s ease; }
        .g-card:hover .g-cap { max-height: 60px; opacity: 1; margin-top: 5px; }

        /* Clip-path wipe reveal */
        .clip-up { clip-path: inset(0 0 100% 0); opacity: 0; transition: clip-path 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1); transform: translateY(30px); }
        .clip-up.in-view { clip-path: inset(0 0 0 0); opacity: 1; transform: none; }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .reveal, .clip-up, .book { transition: none; opacity: 1; transform: none; clip-path: none; }
          .reveal.flash.in-view { animation: none; }
          .contact-icon::before { animation: none; opacity: 0.55; }
          .exp-orb { animation: none; }
          .exp-card::before { transition: none; }
          .hero-text, .hero-frame, .hero-badge-float, .hero-ring, .flip-inner { animation: none !important; }
          .flip-back { display: none; }
          .hero-blob, .hero-ring, .hero-frame, .hero-badge-float { transform: rotate(var(--rot,0deg)) !important; }
        }
        @media (max-width: 760px) {
          .mosaic { grid-template-columns: 1fr; gap: 16px; }
          .g-card { margin-top: 0 !important; height: 240px !important; }
        }
        /* Contact grid — responsive, never overflow narrow phones */
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 16px; }
        @media (max-width: 560px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* Navbar — clean row on desktop, hamburger dropdown on mobile */
        .nav-links { display: flex; gap: 28px; align-items: center; }
        .nav-toggle { display: none; background: none; border: 0; cursor: pointer; padding: 8px; margin: -8px; color: #1A1A1A; line-height: 0; }
        .nav-toggle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
        @media (max-width: 560px) {
          .nav-toggle { display: inline-flex; align-items: center; }
          .nav-links {
            position: absolute; top: 56px; left: 0; right: 0;
            flex-direction: column; align-items: stretch; gap: 0;
            background: rgba(250,250,248,0.98);
            backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid #E8E5DF;
            padding: 6px 24px 14px;
            box-shadow: 0 14px 28px rgba(26,26,26,0.08);
            transform: translateY(-10px); opacity: 0; pointer-events: none;
            transition: opacity 0.22s ease, transform 0.22s ease;
          }
          .nav-links.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
          .nav-links .nav-link { padding: 14px 2px; font-size: 0.8rem; letter-spacing: 0.1em; border-bottom: 1px solid #EEEBE4; }
          .nav-links .nav-link:last-child { border-bottom: 0; }
        }

        /* Keep the hero image visible on every device — never hide it */
        @media (max-width: 900px) {
          .hero-collage { flex: 0 0 auto; width: 320px; max-width: 100%; margin: 8px auto 0; }
        }
        @media (max-width: 460px) {
          .hero-collage { height: 340px; width: 280px; }
          .hero-frame.main { width: 220px; height: 290px; right: 4px; }
          .hero-blob { width: 210px; height: 210px; top: 50px; left: 16px; }
          .hero-badge-float { right: 10px; font-size: 0.62rem; padding: 8px 12px; }
        }
        @media (max-width: 340px) {
          .hero-collage { width: 240px; height: 320px; }
          .hero-frame.main { width: 190px; height: 250px; }
        }
      `}</style>

      <div id="scroll-progress" />

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid #E8E5DF",
          background: "rgba(250,250,248,0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "1rem",
            }}
          >
            Pallavi<span style={{ color: "#2563EB" }}>.</span>
          </p>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            <a href="#stack" className="nav-link" onClick={() => setMenuOpen(false)}>
              Stack
            </a>
            <a href="#work" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a
              href="#experience"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: 72,
            paddingBottom: 64,
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap" as const,
          }}
        >
          <div className="hero-text" style={{ flex: "1 1 380px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#F0EEE9",
                border: "1px solid #E0DDD6",
                padding: "7px 16px",
                borderRadius: 4,
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#666",
                marginBottom: 24,
              }}
            >
              <span style={{ color: "#2563EB" }}>Teacher</span>
              <span style={{ color: "#BBB" }}>turned</span>
              <span style={{ color: "#2563EB" }}>Engineer</span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 7vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Pallavi
              <br />
              Pattanashetti
            </h1>
            <p
              style={{
                fontSize: "1.02rem",
                color: "#555",
                lineHeight: 1.75,
                maxWidth: 560,
                marginBottom: 36,
              }}
            >
              Full stack software engineer and CodeStack Academy graduate with
              1,300+ intensive hours. I craft modern, responsive web
              applications with React, Next.js, C#, and .NET. Years of teaching
              taught me to make hard things feel simple, and I build software
              with that same instinct: clean logic, clear interfaces, nothing
              wasted.
            </p>
          </div>

          <div className="hero-collage" aria-hidden="true">
            <div className="hero-frame main" data-depth="1.2">
              <div className="flip-inner">
                <img
                  className="flip-face flip-front"
                  src="/headshot.jpg"
                  alt="Pallavi Pattanashetti"
                />
                <img
                  className="flip-face flip-back"
                  src="/sketch.jpg"
                  alt="Sketch portrait of Pallavi Pattanashetti"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 72,
          }}
        >
          <div className="card-hover about-card story-card book page-left flash">
            <span
              className="about-tag"
              style={{ background: "#1A1A1A", color: "white" }}
            >
              The Story
            </span>
            <p className="story-text">
              I graduated from CodeStack Academy&apos;s 1,300+ hour program in
              June 2026, but my real training started years earlier in the
              classroom. Teaching across different subjects and age groups taught
              me to think clearly, explain things simply, and stay patient when a
              problem refuses to make sense at first. I carry that same calm and
              curiosity into every codebase I touch.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <b>1,000+</b>
                <span>Training Hours</span>
              </div>
              <div className="about-stat">
                <b>300+</b>
                <span>Internship Hours</span>
              </div>
              <div className="about-stat">
                <b>5</b>
                <span>Live Projects</span>
              </div>
            </div>
          </div>
          <div
            className="about-card philo-card book page-right flash"
            style={{
              border: "1px solid #2563EB",
              borderRadius: 12,
            }}
          >
            <span
              className="about-quote"
              style={{ color: "rgba(255,255,255,0.16)" }}
            >
              &ldquo;
            </span>
            <span
              className="about-tag"
              style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
            >
              Philosophy
            </span>
            <p className="about-title">Functional Transparency</p>
            <p
              style={{
                fontSize: "0.94rem",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.8,
              }}
            >
              The best software, like the best lesson, quietly removes friction
              instead of adding flair. I care about building things that are
              solid under the hood and effortless to use. If someone has to stop
              and wonder what a button does, I know I still have work to do.
            </p>
            <p className="about-sign">— Pallavi</p>
          </div>
        </div>


        {/* Stack */}
        <section id="stack" style={{ marginBottom: 72 }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              marginBottom: 32,
            }}
          >
            Technical Stack
          </h2>
          <div className="stack-grid">
            {stack.map((row, i) => (
              <div
                key={row.category}
                className="stack-card reveal left"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="stack-card-head">
                  <span className="stack-ico">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {stackIcons[row.icon]}
                    </svg>
                  </span>
                  <span className="stack-cat">{row.category}</span>
                </div>
                <div className="stack-pills">
                  {row.items.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" style={{ marginBottom: 72 }}>
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 32,
              flexWrap: "wrap" as const,
              gap: 12,
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 900,
              }}
            >
              Projects
            </h2>
            <a
              href="https://github.com/PallaviPattanashetti"
              target="_blank"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "#2563EB",
                textDecoration: "none",
              }}
            >
            
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`proj-card reveal flash ${i % 2 === 0 ? "left" : "right"}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 20,
                    flexWrap: "wrap" as const,
                  }}
                >
                  <div>
                    <p className="proj-name">{project.name}</p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "#999",
                        marginBottom: 10,
                      }}
                    >
                      {project.role}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#555",
                        lineHeight: 1.68,
                        maxWidth: 520,
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  <div className="proj-preview" aria-hidden="true">
                    <div className="proj-preview-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="proj-preview-viewport">
                      <iframe
                        src={project.url}
                        title={`${project.name} preview`}
                        loading="lazy"
                        scrolling="no"
                        tabIndex={-1}
                      />
                    </div>
                  </div>
                  <span className="proj-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ marginBottom: 72 }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              marginBottom: 32,
            }}
          >
            Experience
          </h2>
          <div className="exp-wrap reveal scale">
            <span className="exp-orb a" aria-hidden="true" />
            <span className="exp-orb b" aria-hidden="true" />
            <span className="exp-orb c" aria-hidden="true" />
            <div className="exp-list">
            {experience.map((job, i) => (
              <div
                key={job.org + job.period}
                className={`exp-card reveal flash ${i % 2 === 0 ? "right" : "left"}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 16,
                    flexWrap: "wrap" as const,
                    marginBottom: 6,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    {job.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "#999",
                      flexShrink: 0,
                    }}
                  >
                    {job.period}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "#2563EB",
                    marginBottom: 12,
                  }}
                >
                  {job.org}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.68,
                    maxWidth: 640,
                  }}
                >
                  {job.desc}
                </p>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ marginBottom: 72 }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              marginBottom: 32,
            }}
          >
            Get In Touch
          </h2>
          <div className="contact-grid">
            {[
              {
                label: "Email",
                value: "Pallavi.Pattanashetti@gmail.com",
                href: "mailto:Pallavi.Pattanashetti@gmail.com",
                icon: "email",
                external: false,
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/pallavipraveen",
                href: "https://linkedin.com/in/pallavipraveen",
                icon: "linkedin",
                external: true,
              },
              {
                label: "GitHub",
                value: "PallaviPattanashetti",
                href: "https://github.com/PallaviPattanashetti",
                icon: "github",
                external: true,
              },
              {
                label: "Phone",
                value: "650 868 5268",
                href: "tel:6508685268",
                icon: "phone",
                external: false,
              },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="contact-card reveal scale"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "26px 30px",
                }}
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {contactIcons[c.icon]}
                  </svg>
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: "#999",
                      marginBottom: 5,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      wordBreak: "break-word" as const,
                    }}
                  >
                    {c.value}
                  </p>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Education and Community */}
        <div
          className="reveal scale flash"
          style={{
            background: "#1A1A1A",
            color: "white",
            borderRadius: 14,
            padding: 44,
            marginBottom: 72,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  marginBottom: 24,
                  color: "white",
                }}
              >
                Education
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 18,
                }}
              >
                {[
                  {
                    label: "Software Engineering",
                    name: "CodeStack Academy, Graduated June 2026",
                  },
                  {
                    label: "Bachelor of Education",
                    name: "KLE University, Karnataka, India",
                  },
                  {
                    label: "MA, English Literature",
                    name: "Kuvempu University, Karnataka, India",
                  },
                ].map((edu) => (
                  <div key={edu.label}>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "#2563EB",
                        marginBottom: 3,
                      }}
                    >
                      {edu.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "rgba(255,255,255,0.85)",
                        fontWeight: 500,
                      }}
                    >
                      {edu.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  marginBottom: 16,
                  color: "white",
                }}
              >
                Certifications
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap" as const,
                  gap: 6,
                  marginBottom: 28,
                }}
              >
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.75rem",
                      padding: "5px 12px",
                      borderRadius: 4,
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  marginBottom: 14,
                  color: "white",
                }}
              >
                Community
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.72,
                }}
              >
                TEDxManteca Event Representative, former Scout Den Leader, and
                community volunteer. I show up the same way in the community as I
                do at my desk.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #E8E5DF",
          padding: "28px 24px",
          background: "#FAFAF8",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap" as const,
            gap: 10,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "0.95rem",
            }}
          >
            Pallavi <span style={{ color: "#2563EB" }}>Pattanashetti</span>
          </p>
          <p style={{ fontSize: "0.75rem", color: "#AAA", fontWeight: 500 }}>
            Manteca, CA
          </p>
          <p
            style={{
              fontSize: "0.68rem",
              color: "#CCC",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
            }}
          >
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
