import { PortfolioConfig, SocialPlatform } from "./portfolio-types";

const portfolioData: PortfolioConfig = {
  personalInfo: {
    firstName: "Anandkrishna",
    lastName: "Thandayamparambil",
    title: "God Developer",
    location: "Mumbai, India",
    email: "anandkrishna2534@gmail.com",
  },

  content: {
    tagline:
      "a self-taught front-end web developer based in Maharashtra, India, with a passion for building clean and performant web apps",
    about: [
      "Hi there! I'm a developer who loves digging into how stuff works on the web and getting all excited about making websites run faster. I'm always on the lookout to learn more about web development and what's new in the tech world. ",
      "My current jam is delving into React performance, exploring best coding practices and leveling up my skills. ",
      "When I'm not busy churning out code, you can probably find me watching anime or tinkering around with my Linux setup. ",
    ],
    svgLink: "https://schar.dev/images/saurabh-charde.svg",
  },

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    tools: ["Git", "Neovim", "Linux", "VS Code", "Figma", "Postman"],
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
      url: "https://www.reddit.com/user/xyz",
      username: "xyz",
    },
    {
      platform: SocialPlatform.TWITTER,
      url: "https://twitter.com/Anand_1244",
      username: "Anand_1244",
    },
    {
      platform: SocialPlatform.TELEGRAM,
      url: "https://t.me/s_adi_dev",
      username: "s_adi_dev",
    },
  ],

  workExperience: [
    {
      company: "TechNova Labs",
      position: "Full Stack Developer",
      startDate: new Date("2023-01-01"),
      endDate: null,
      description:
        "Building modern web applications for startups and enterprises.",
      achievements: [
        "Redesigned core dashboard improving performance by 30%",
        "Built reusable component library with Tailwind and ShadCN",
        "Integrated real-time chat using WebSocket",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      company: "OpenSource Contributions",
      position: "Contributor",
      startDate: new Date("2022-05-01"),
      endDate: new Date("2022-12-01"),
      description:
        "Actively contributed to open-source projects in the React and Node ecosystem.",
      achievements: [
        "Merged 10+ PRs in high-traffic repositories",
        "Improved documentation and onboarding experience",
      ],
      technologies: ["React", "Node.js", "Markdown", "Git"],
    },
  ],

  education: [
    {
      institution: "Indian Institute of Technology",
      degree: "B.Tech in Computer Science",
      startDate: new Date("2019-07-01"),
      endDate: new Date("2023-06-30"),
    },
  ],

  footerMarquee: [
    "Front End Web Developer",
    "Not A UI/UX Guy",
    "Linux Enthusiast",
    "Weeb",
  ],

  includeGitHubInProjects: true,
};

export default portfolioData;
