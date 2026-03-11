import { PortfolioConfig, SocialPlatform } from "./portfolio-types";

const portfolioData: PortfolioConfig = {
  personalInfo: {
    firstName: "Anand",
    lastName: "Krishna",
    title: "Web Developer",
    location: "Mumbai, India",
    email: "anandkrishna2534@gmail.com",
  },

  content: {
    tagline:
      "Full-stack developer passionate about building scalable applications, exploring new technologies, and solving complex problems with elegant solutions.",
    about: [
      "I'm Anand, a developer from Mumbai, India, passionate about creating practical solutions to real-world problems. I enjoy exploring new technologies, understanding how systems work, and collaborating with others to build meaningful projects.",
      "I work across the full stack, from crafting responsive UIs with React and Tailwind CSS to designing robust backend systems with Node.js, Express, and MongoDB. I'm always curious about different tech stacks and approaches, whether it's Python CLI tools, configuration management with shell scripts, or even Vim customization.",
      "Beyond coding, I'm interested in Linux systems, open-source software, and continuous learning. I believe in writing clean, maintainable code and contributing to projects that make a real impact.",
    ],
  },

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "Shell", "SQL", "Lua"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Vite",
    ],
    tools: ["Git", "Neovim", "Linux", "VS Code", "Figma"],
  },

  socialLinks: [
    {
      platform: SocialPlatform.GITHUB,
      url: "https://github.com/Anandqwe",
      username: "Anandqwe",
    },
    {
      platform: SocialPlatform.LINKEDIN,
      url: "https://linkedin.com/in/anand-krishna1244",
      username: "anand-krishna1244",
    },
    {
      platform: SocialPlatform.REDDIT,
      url: "https://www.reddit.com/user/Anand_1244",
      username: "Anand_1244",
    },
    {
      platform: SocialPlatform.TWITTER,
      url: "https://twitter.com/Anand_1244",
      username: "Anand_1244",
    },
    {
      platform: SocialPlatform.TELEGRAM,
      url: "https://t.me/Anand_1244",
      username: "anand_1244",
    },
  ],

  workExperience: [
    {
      company: "UptoSkills",
      position: "Web Development Intern",
      startDate: new Date("2026-01-04"),
      endDate: new Date("2026-04-04"),
      description:
        "Currently interning as a Web Development Intern, gaining hands-on experience in full-stack development. Working on building scalable web applications using modern technologies and best practices.",
      achievements: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Implemented responsive UI components with Tailwind CSS and component-based architecture",
        "Designed and optimized MongoDB databases for improved query performance",
        "Collaborated with senior developers on code reviews and architectural improvements",
        "Contributed to debugging and implementing features for production applications",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript", "TypeScript", "Git"],
    },
    {
      company: "Prodigy InfoTech",
      position: "Web Development Intern",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-08-31"),
      description:
        "Completed a 1-month internship program focused on hands-on experience in web development.",
      achievements: [
        "Built and optimized responsive web pages using React and Tailwind CSS",
        "Worked on performance improvements for existing projects",
        "Collaborated with the team to understand real-world development practices",
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Git"],
    },
  ],

  education: [
    {
      institution: "SIES College of Arts, Science & Commerce",
      degree: "B.Sc in Computer Science",
      startDate: new Date("2023-06-30"),
      endDate: new Date("2026-06-30"),
    },
  ],

  footerMarquee: [
    "Full Stack Web Developer",
    "Linux Enthusiast",
    "Open Source Contributor",
    "Web",
  ],

  includeGitHubInProjects: true,
};

export default portfolioData;