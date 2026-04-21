const skills = [
  {
    name: "HTML5",
    color: "#e34f26",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5.902 27.201L4 5h24l-1.902 22.2L15.993 30z" fill="#e44d26"/>
        <path d="M16 27.858l7.294-2.021 1.624-18.167H16z" fill="#f16529"/>
        <path d="M16 13.407h-3.601l-.248-2.783H16V7.91H8.856l.065.733.663 7.43H16zm0 8.55l-.014.004-3.024-.818-.194-2.168H9.8l.381 4.26 5.803 1.609.016-.004z" fill="#ebebeb"/>
        <path d="M15.986 13.407v2.733h3.343l-.315 3.524-3.028.818v2.839l5.806-1.608.043-.476.665-7.443.069-.733h-.678zm0-5.497v2.714h6.547l.054-.609.124-1.372.065-.733z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572b6",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5.902 27.201L4 5h24l-1.903 22.2L15.993 30z" fill="#1572b6"/>
        <path d="M16 27.858l7.294-2.021L25 7.671H16z" fill="#33a9dc"/>
        <path d="M16 13.375H11.9l.277 3.088H16v-3.014zm0-5.404H9.996l.277 3.015H16zm0 11.469l-.014.004-3.898-1.051-.249-2.787H8.9l.49 5.501 6.594 1.829.016-.004z" fill="#fff"/>
        <path d="M15.986 13.375v3.014h3.816l-.36 4.024-3.456.933v3.139l6.597-1.829.048-.54 1.031-11.534H16zm0-5.404v3.015h7.491l.062-.694.141-1.591.065-.73z" fill="#ebebeb"/>
      </svg>
    ),
  },
  {
    name: "JavaScript (ES6+)",
   
    color: "#f7df1e",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="2" fill="#f7df1e"/>
        <path d="M21.57 21.76c.44.72.99 1.25 1.99 1.25.83 0 1.37-.42 1.37-1 0-.69-.55-.94-1.47-1.34l-.5-.22c-1.46-.62-2.44-1.4-2.44-3.04 0-1.51 1.15-2.67 2.95-2.67 1.28 0 2.2.44 2.86 1.6l-1.57 1.01c-.34-.62-.72-.86-1.29-.86-.59 0-.96.37-.96.86 0 .6.37.85 1.23 1.22l.5.22c1.72.74 2.71 1.49 2.71 3.18 0 1.82-1.43 2.81-3.35 2.81-1.88 0-3.09-.9-3.68-2.07zm-7.4.2c.32.57.62.93 1.04.93.42 0 .69-.16.69-.82v-6.32h2.02v6.35c0 1.35-.79 2.97-2.54 2.97-1.64 0-2.59-.93-3.13-2.01z" fill="#333"/>
      </svg>
    ),
  },
  {
    name: "jQuery",
    
    color: "#0769ad",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="2" fill="#0769ad"/>
        <path d="M7 13.5s2.7-2.6 7.5-.5c3.5 1.5 5.2 4.7 8.5 5 2.5.2 4.3-1 4.3-1s-2.2 3.5-6.5 2.5c-3.5-.8-5.3-4.5-8.8-5C9.5 14 7 13.5 7 13.5zm0 3.5s2.7-2.6 7.5-.5c3.5 1.5 5.2 4.7 8.5 5 2.5.2 4.3-1 4.3-1s-2.2 3.5-6.5 2.5c-3.5-.8-5.3-4.5-8.8-5C9.5 17 7 17 7 17z" fill="#fff"/>
      </svg>
    ),
  },
  // Frameworks
  {
    name: "Vue.js",
    
    color: "#42b883",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <polygon points="16,3 28,3 16,24 4,3" fill="#42b883"/>
        <polygon points="16,3 22,3 16,13 10,3" fill="#35495e"/>
      </svg>
    ),
  },
  {
    name: "Pinia",
    
    color: "#ffd859",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="20" rx="8" ry="9" fill="#ffd859"/>
        <ellipse cx="16" cy="20" rx="5" ry="6" fill="#f5c842"/>
        <rect x="14" y="7" width="4" height="7" rx="2" fill="#4caf50"/>
        <ellipse cx="12" cy="8" rx="2.5" ry="3.5" fill="#4caf50" transform="rotate(-20 12 8)"/>
        <ellipse cx="20" cy="8" rx="2.5" ry="3.5" fill="#4caf50" transform="rotate(20 20 8)"/>
        <circle cx="13" cy="21" r="1.2" fill="#c8a800"/>
        <circle cx="19" cy="21" r="1.2" fill="#c8a800"/>
        <circle cx="16" cy="24" r="1.2" fill="#c8a800"/>
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61dafb",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.5" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1.2" fill="none">
          <ellipse cx="16" cy="16" rx="12" ry="4.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    color: "#7952b3",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="4" fill="#7952b3"/>
        <path d="M10 8h7.5a5 5 0 0 1 3 8.97A5.5 5.5 0 0 1 17 24H10zm3 3v4h4a2 2 0 0 0 0-4zm0 7v4.5h4.5a2.5 2.5 0 0 0 0-5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.186 3.048 2.162C18.165 14.1 19.77 15.733 23.2 15.733c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.186-3.048-2.162C21.035 8.033 19.43 6.4 16 6.4zm-8 9.6c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.186 3.048 2.162C10.165 23.7 11.77 25.333 15.2 25.333c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.186-3.048-2.162C13.035 17.633 11.43 16 8 16z" fill="#38bdf8"/>
      </svg>
    ),
  },

  {
    name: "Git / GitHub",
    color: "#f05032",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M29.47 14.47L17.53 2.53a1.79 1.79 0 0 0-2.53 0l-2.52 2.52 3.19 3.19a2.13 2.13 0 0 1 2.7 2.72l3.08 3.08a2.13 2.13 0 1 1-1.28 1.28l-2.87-2.87v7.55a2.13 2.13 0 1 1-1.75-.07V12.2a2.13 2.13 0 0 1-1.16-2.8L12.22 6.25 2.53 15.94a1.79 1.79 0 0 0 0 2.53l11.94 11.94a1.79 1.79 0 0 0 2.53 0l12.47-12.47a1.79 1.79 0 0 0 0-2.47z" fill="#f05032"/>
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "#ffca28",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5.8 25.6L8.2 6.5l6.4 6.4z" fill="#ffa000"/>
        <path d="M19.4 12.2l-5.2-5.8-6.4 19.2z" fill="#f57f17"/>
        <path d="M24 19l-2.2-13.4-3.6 6.1z" fill="#ffa000"/>
        <path d="M5.8 25.6l18.2-6.6-4.6-7.4z" fill="#ffca28"/>
      </svg>
    ),
  },
  {
    name: "Sitecore",
    color: "#eb1f1f",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#eb1f1f"/>
        <circle cx="16" cy="16" r="7" fill="none" stroke="#fff" strokeWidth="2"/>
        <circle cx="16" cy="16" r="2.5" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Storybook",
    color: "#ff4785",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#ff4785"/>
        <path d="M21.6 3.2l-.3 4-2.1-.1V5H12v5.2l2-.1.1-2.1 2.1.1V5h1v3.1c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1v-5l-1.5.1C8.1 3.3 8 3.5 8 3.7V28c0 .3.1.5.4.5l13.2.5c.3 0 .5-.2.5-.5V3.2H21.6z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "VS Code",
    color: "#007acc",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M22.67 3.35L11.5 14.2 5.27 9.2 3 10.53v11l2.27 1.34 6.23-5 11.17 10.85 5.33-2.5V5.85zm0 7.25v10.8l-7.5-5.4z" fill="#007acc"/>
      </svg>
    ),
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with — from crafting
          pixel-perfect layouts to building interactive, data-driven interfaces.
        </p>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          aria-label="Skills list"
        >
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 card-hover shadow-xs">
                <span className="w-8 h-8 flex-none" style={{ color: skill.color }}>
                  {skill.logo}
                </span>
                <span className="text-sm font-medium text-foreground leading-tight">
                  {skill.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};