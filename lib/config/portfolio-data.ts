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
      "an aspiring full-stack web developer from Maharashtra, India, exploring React, Node.js, and MongoDB while building projects that are clean, practical, and user-friendly.",
    about: [
      "Hi there! I'm Anand, a developer who’s fascinated by how the web works under the hood. I enjoy breaking down complex concepts into simple, working solutions and continuously improving my skills.",
      "Right now, I’m diving into full-stack development — learning React and Tailwind on the frontend, and exploring Node.js, Express, and MongoDB on the backend. I’m also tinkering with Firebase and experimenting with different project ideas to put my learning into practice.",
      "Outside of coding, I like exploring Linux distros, geeking out about ethical hacking, and occasionally chilling with some anime. My goal is to grow into a well-rounded developer who can build scalable apps and contribute meaningfully to open-source and real-world projects.",
    ],
    svgLink: "https://schar.dev/images/saurabh-charde.svg",
  },

  skills: {
    languages: ["Java", "Flutter", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
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
      url: "https://t.me/Anand1244",
      username: "s_adi_dev",
    },
  ],

  workExperience: [
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
    "Weeb",
  ],

  includeGitHubInProjects: true,
};

export default portfolioData;