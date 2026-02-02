export const PROFILE_DATA = {
    name: "Lavinora",
    roles: [
        "Software Engineer",
        "AI Engineer",
        "Video Editor"
    ],
    hero: {
        roleText: "Software Engineer • AI Engineer • Video Editor",
        greeting: "Hello, I am",
        description: "I build scalable web applications infused with Artificial Intelligence. Passionate about bridging the gap between complex LLMs and user-friendly interfaces to create intelligent digital experiences.",
        ctaButton: "View My Work"
    },
    links: {
        github: "https://github.com/lavinora",
        linkedin: "-",
        discord: "laviinora",
        email: "projectdave52@gmail.com"
    }
};

export const CAREER_DATA = [
  {
    year: "Present",
    role: "Software & AI Engineer",
    company: "Freelance / Self-Employed",
    description: "Returning to my roots as a Software Engineer with specialized focus on AI integration. Building scalable web apps infused with intelligent agents and LLM capabilities."
  },
  {
    year: "2023 - 2025",
    role: "Video Editor",
    company: "Creative Tech & Projects",
    description: "A period of creative exploration. Combined technical skills with storytelling. Developed AI automation tools for content creation while mastering Machine Learning fundamentals."
  },
  {
    year: "2022 - 2023",
    role: "Fullstack Developer",
    company: "Freelance / Projects",
    description: "Transitioned from specific languages to broader engineering problems. Worked on various web technologies, system design, and learned how to build complete software solutions."
  },
  {
    year: "2021 - 2022",
    role: "Java Developer",
    company: "Early Career / Learning",
    description: "Started the programming journey with Java. Built a strong foundation in Object-Oriented Programming (OOP), Data Structures, and backend logic before moving to modern web stacks."
  }
];

export const WORKS_DATA = [
  {
    title: "Project One",
    description:
      "A modern web application built with React and Tailwind CSS. Features responsive design and smooth animations.",
    tech: ["React", "Tailwind", "TypeScript"],
    category: "Full-Stack",
    links: { live: "#", github: "#" },
  },
  {
    title: "Project Two",
    description:
      "Full-stack application with authentication and real-time updates. Built with modern best practices.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    category: "Full-Stack",
    links: { live: "#", github: "#" },
  },
  {
    title: "Project Three",
    description:
      "Mobile-first design with a focus on performance and accessibility. Clean UI with intuitive navigation.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Frontend",
    links: { live: "#", github: "#" },
  },
];

export const TECH_STACK_CATEGORIZED = [
  {
    category: "Languages",
    skills: [
      { name: "Python", color: "#3776AB", proficiency: 90 },
      { name: "Java", color: "#5382A1", proficiency: 75 },
      { name: "JavaScript", color: "#F7DF1E", proficiency: 95 },
      { name: "TypeScript", color: "#3178C6", proficiency: 90 },
      { name: "HTML", color: "#E34F26", proficiency: 95 },
      { name: "CSS", color: "#1572B6", proficiency: 90 },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React", color: "#61DAFB", proficiency: 95 },
      { name: "Next.js", color: "#000000", proficiency: 90 },
      { name: "Flutter", color: "#02569B", proficiency: 70 },
      { name: "Tailwind CSS", color: "#06B6D4", proficiency: 95 },
      { name: "Framer Motion", color: "#0055FF", proficiency: 85 },
      { name: "TanStack Query", color: "#FF4154", proficiency: 80 },
    ],
  },
  {
    category: "State & Forms",
    skills: [
      { name: "React Hook Form", color: "#EC5990", proficiency: 85 },
      { name: "Zustand", color: "#443E38", proficiency: 80 },
      { name: "Zod", color: "#3E67B1", proficiency: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", color: "#339933", proficiency: 85 },
      { name: "Laravel", color: "#FF2D20", proficiency: 75 },
      { name: "FastAPI", color: "#009688", proficiency: 80 },
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Scikit-learn", color: "#F7931E", proficiency: 80 },
      { name: "NumPy", color: "#013243", proficiency: 85 },
      { name: "Pandas", color: "#150458", proficiency: 85 },
      { name: "Jupyter", color: "#F37626", proficiency: 90 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", color: "#4479A1", proficiency: 85 },
      { name: "PostgreSQL", color: "#4169E1", proficiency: 80 },
      { name: "Redis", color: "#DC382D", proficiency: 70 },
      { name: "Supabase", color: "#3ECF8E", proficiency: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", color: "#2496ED", proficiency: 75 },
      { name: "Git", color: "#F05032", proficiency: 95 },
      { name: "GitHub", color: "#181717", proficiency: 95 },
      { name: "Vercel", color: "#000000", proficiency: 90 },
    ],
  },
  {
    category: "Creative Tools",
    skills: [
      { name: "Figma", color: "#F24E1E", proficiency: 85 },
      { name: "Photoshop", color: "#31A8FF", proficiency: 80 },
      { name: "Premiere Pro", color: "#9999FF", proficiency: 85 },
      { name: "Davinci Resolve", color: "#FF5C5C", proficiency: 75 },
    ],
  },
];

export const TECH_STACK = TECH_STACK_CATEGORIZED.flatMap(cat => cat.skills);