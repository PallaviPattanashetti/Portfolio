import React from "react";

export default function Page() {
  const projects = [
    {
      name: "Aadhya Community Site",
     role: "Community Project",
      desc: "A site built around local community work and volunteering. Warm, accessible, and made to connect people.",
      url: "https://aadhya-website.vercel.app",
    },
    {
      name: "TimeBank",
      role: "Project Lead",
      desc: "A community platform where people trade skills and time instead of money. I led the team from concept to launch, owning the architecture.",
      url: "https://github.com/PallaviPattanashetti/TimeBank",
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
      url: "https://influentialperson-git-main-pallavipattanashettis-projects.vercel.app/",
    },
  ];

  const stack = [
    { category: "Languages", items: "TypeScript, JavaScript, C#, HTML5, CSS3" },
    {
      category: "Frontend",
      items: "React, Next.js, Angular, Tailwind CSS, Bootstrap",
    },
    { category: "Backend", items: "ASP.NET Core, Web API, Node.js, REST APIs" },
    { category: "Data and Cloud", items: "SQL, Microsoft Azure, Vercel" },
    {
      category: "Design",
      items: "Figma, Google Stitch, Responsive Web Design",
    },
    {
      category: "Dev Tools",
      items: "GitHub, Postman, Swagger, VS Code, Visual Studio",
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
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .nav-link { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; color: #666; transition: color 0.2s; }
        .nav-link:hover { color: #2563EB; }
        .btn { display: inline-block; background: #1A1A1A; color: white; padding: 13px 26px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 4px; transition: background 0.2s; text-decoration: none; }
        .btn:hover { background: #2563EB; }
        .proj-card { display: block; text-decoration: none; color: inherit; background: white; border: 1px solid #E8E5DF; border-radius: 12px; padding: 28px 30px; transition: border-color 0.2s, box-shadow 0.2s; }
        .proj-card:hover { border-color: #2563EB; box-shadow: 0 4px 20px rgba(37,99,235,0.08); }
        .proj-card:hover .proj-name { color: #2563EB; }
        .proj-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; transition: color 0.2s; }
        .card-hover { background: white; border: 1px solid #E8E5DF; border-radius: 12px; padding: 30px; transition: border-color 0.2s; }
        .card-hover:hover { border-color: #2563EB; }
        .contact-card { display: block; text-decoration: none; color: inherit; background: white; border: 1px solid #E8E5DF; border-radius: 12px; padding: 24px 28px; transition: border-color 0.2s; }
        .contact-card:hover { border-color: #2563EB; }
        .stack-row { display: flex; gap: 16px; align-items: baseline; padding: 16px 0; border-bottom: 1px solid #F0EEE9; }
        .stack-row:last-child { border-bottom: none; }
        @media (max-width: 640px) {
          .stack-row { flex-direction: column; gap: 4px; }
        }
      `}</style>

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid #E8E5DF",
          background: "#FAFAF8",
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
        <section style={{ paddingTop: 72, paddingBottom: 64 }}>
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
            Full stack software engineer and CodeStack Academy graduate. I spent
            years as a teacher learning how to make hard things feel simple. Now
            I build software with that same instinct: clean logic, clear
            interfaces, nothing wasted.
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a href="https://docs.google.com/document/d/1Hb3IMTS5r23AP6nOIUG8NOGrOcO1eks5UCCGXaws6_Q/edit?usp=sharing" target="_blank" className="btn">
              View Resume
            </a>
            <a
              href="https://newfrontend-lemon.vercel.app"
              target="_blank"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#2563EB",
                textDecoration: "none",
              }}
            >
              
            </a>
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
          <div className="card-hover">
            <span
              style={{
                display: "inline-block",
                background: "#1A1A1A",
                color: "white",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase" as const,
                padding: "4px 10px",
                borderRadius: 2,
                marginBottom: 18,
              }}
            >
              The Story
            </span>
            <p style={{ fontSize: "0.92rem", color: "#444", lineHeight: 1.78 }}>
              I graduated from CodeStack Academy&apos;s 1,000 hour program in June
              2026. Before that, I spent years teaching across different
              subjects and age groups. That background trained me to think
              structurally, communicate clearly, and find the simplest path
              through a complex problem. I bring that to every codebase I touch.
            </p>
          </div>
          <div
            style={{
              background: "#2563EB",
              border: "1px solid #2563EB",
              borderRadius: 12,
              padding: 30,
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase" as const,
                padding: "4px 10px",
                borderRadius: 2,
                marginBottom: 18,
              }}
            >
              Philosophy
            </span>
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.78,
              }}
            >
              I call it{" "}
              <strong style={{ color: "white" }}>
                Functional Transparency
              </strong>
              . The best software, like the best lesson, removes friction
              instead of adding flair. I build things that are technically solid
              and immediately understandable. If a user has to guess what
              something does, the design has already failed.
            </p>
          </div>
        </div>

        {/* Projects */}
        <section id="work" style={{ marginBottom: 72 }}>
          <div
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
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card"
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
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      fontWeight: 900,
                      color: "#E8E5DF",
                      flexShrink: 0,
                    }}
                  >
                    
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" style={{ marginBottom: 72 }}>
          <h2
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
            {stack.map((row) => (
              <div key={row.category} className="stack-row">
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
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
            }}
          >
            <a
              href="mailto:Pallavi.Pattanashetti@gmail.com"
              className="contact-card"
            >
              <p
                style={{
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Email
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  wordBreak: "break-all" as const,
                }}
              >
                Pallavi.Pattanashetti@gmail.com
              </p>
            </a>
            <a
              href="https://linkedin.com/in/pallavipraveen"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <p
                style={{
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                LinkedIn
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  wordBreak: "break-all" as const,
                }}
              >
                linkedin.com/in/pallavipraveen
              </p>
            </a>
            <a
              href="https://github.com/PallaviPattanashetti"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <p
                style={{
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                GitHub
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  wordBreak: "break-all" as const,
                }}
              >
                PallaviPattanashetti
              </p>
            </a>
            <a
              href="tel:6508685268"
              className="contact-card"
            >
              <p
                style={{
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Phone
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  wordBreak: "break-all" as const,
                }}
              >
                650 868 5268
              </p>
            </a>
          </div>
        </section>

        {/* Education and Community */}
        <div
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
                community volunteer. I show up the same way in the community as
                I do at my desk.
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