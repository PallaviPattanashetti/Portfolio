"use client";

import React, { useEffect } from "react";

export default function Page() {
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
      items: "C#, TypeScript, JavaScript, HTML5, CSS3, SQL",
    },
    {
      category: "Frameworks",
      items: "React, Next.js, .NET, Tailwind CSS, Bootstrap",
    },
    { category: "Backend", items: "ASP.NET Core, Web API, Node.js, REST APIs" },
    {
      category: "Cloud and Data",
      items: "Microsoft Azure, SQL Server, Vercel, Railway",
    },
    {
      category: "Design",
      items: "Figma, Google Stitch, Responsive Web Design",
    },
    {
      category: "Tools and Practice",
      items: "Git/GitHub, Visual Studio, Postman, Swagger, Agile/Scrum",
    },
  ];

  const experience = [
    {
      role: "Software Engineer and Intern",
      org: "CodeStack Academy",
      period: "Sep 2025 – Jun 2026",
      desc: "Completed 1,000+ hours of intensive software engineering training in React, Next.js, C#, and .NET, including 300+ hours of internship experience on Stockfolio, CodeStack's internal application, contributing across both the API and client codebases. Also led TimeBank, my full stack capstone, from concept through deployment.",
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
        .contact-card { text-decoration: none; color: inherit; background: white; border: 1px solid #E8E5DF; border-radius: 12px; transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .contact-card:hover { border-color: #2563EB; box-shadow: 0 10px 26px rgba(37,99,235,0.12); transform: translateY(-3px); }
        .contact-card:hover .contact-icon { background: #2563EB; color: #fff; }
        .contact-card:hover .contact-arrow { color: #2563EB; opacity: 1; transform: translate(3px, -3px); }
        .contact-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 46px; height: 46px; border-radius: 10px; background: #F0EEE9; color: #2563EB; font-size: 1.1rem; font-weight: 700; transition: background 0.25s, color 0.25s; }
        .contact-arrow { flex-shrink: 0; font-size: 1.1rem; font-weight: 700; color: #C8C4BC; opacity: 0.7; transition: color 0.25s, transform 0.25s, opacity 0.25s; }

        .stack-row { display: flex; gap: 16px; align-items: center; padding: 16px 0; border-bottom: 1px solid #F0EEE9; }
        .stack-row:last-child { border-bottom: none; }
        .stack-accent { display: block; width: 26px; height: 3px; border-radius: 2px; background: #2563EB; margin-right: 4px; flex-shrink: 0; transform: scaleX(0); transform-origin: left; transition: transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s; }
        .reveal.in-view .stack-accent { transform: scaleX(1); }

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
        .hero-frame::after { content: ""; position: absolute; inset: 0; background: linear-gradient(150deg, rgba(37,99,235,0.32), rgba(26,26,26,0.10) 65%); mix-blend-mode: multiply; transition: opacity 0.5s ease; }
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
          .reveal.in-view .stack-accent { transition: none; }
          .reveal.flash.in-view { animation: none; }
          .hero-text, .hero-frame, .hero-badge-float, .hero-ring { animation: none !important; }
          .hero-blob, .hero-ring, .hero-frame, .hero-badge-float { transform: rotate(var(--rot,0deg)) !important; }
        }
        @media (max-width: 640px) {
          .stack-row { align-items: flex-start; }
        }
        @media (max-width: 760px) {
          .mosaic { grid-template-columns: 1fr; gap: 16px; }
          .g-card { margin-top: 0 !important; height: 240px !important; }
        }
        @media (max-width: 780px) {
          .hero-collage { display: none; }
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
          <div style={{ display: "flex", gap: 28 }}>
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#stack" className="nav-link">
              Stack
            </a>
            <a href="#contact" className="nav-link">
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
              1,000+ intensive hours. I craft modern, responsive web
              applications with React, Next.js, C#, and .NET. Years of teaching
              taught me to make hard things feel simple, and I build software
              with that same instinct: clean logic, clear interfaces, nothing
              wasted.
            </p>
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <a href="#work" className="nav-link">
                See My Work
              </a>
            </div>
          </div>

          <div className="hero-collage" aria-hidden="true">
            <div className="hero-frame main" data-depth="1.2">
              <img
                src="/headshot.jpg"
                alt="Pallavi Pattanashetti"
              />
            </div>
            <span className="hero-badge-float" data-depth="2.8">
              1,000+ Hours
            </span>
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
              I graduated from CodeStack Academy&apos;s 1,000+ hour program in
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
              All on GitHub
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
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            {experience.map((job, i) => (
              <div
                key={job.org + job.period}
                className={`card-hover reveal flash ${i % 2 === 0 ? "right" : "left"}`}
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
        </section>

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
          <div
            style={{
              background: "white",
              border: "1px solid #E8E5DF",
              borderRadius: 12,
              padding: "8px 28px",
            }}
          >
            {stack.map((row, i) => (
              <div
                key={row.category}
                className="stack-row reveal left"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="stack-accent" />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase" as const,
                    color: "#2563EB",
                    minWidth: 140,
                    flexShrink: 0,
                  }}
                >
                  {row.category}
                </span>
                <span
                  style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.5 }}
                >
                  {row.items}
                </span>
              </div>
            ))}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                label: "Email",
                value: "Pallavi.Pattanashetti@gmail.com",
                href: "mailto:Pallavi.Pattanashetti@gmail.com",
                icon: "✉",
                external: false,
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/pallavipraveen",
                href: "https://linkedin.com/in/pallavipraveen",
                icon: "in",
                external: true,
              },
              {
                label: "GitHub",
                value: "PallaviPattanashetti",
                href: "https://github.com/PallaviPattanashetti",
                icon: "⌥",
                external: true,
              },
              {
                label: "Phone",
                value: "650 868 5268",
                href: "tel:6508685268",
                icon: "☎",
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
                <span className="contact-icon">{c.icon}</span>
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
                    name: "CodeStack Academy, Graduating June 2026",
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
