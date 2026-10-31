import sbiLabLogo from "../assets/brands/sbi-lab.png";
import apneCashbookLogo from "../assets/brands/apna-cashbook.png";
import soundControllerLogo from "../assets/brands/sound-controller.png";

export const profile = {
  name: "Anand Kumar",
  initials: "AK",
  role: "Backend Engineer & Healthcare AI",
  headline: "I engineer intelligent systems for the real world.",
  summary:
    "I build scalable healthcare software, AI-enabled products, and thoughtful digital experiences where research meets reliable engineering.",
  location: "New Delhi, India",
  availability: "Open to ambitious collaborations",
  email: "anandku2602@gmail.com",
  phone: "+91 8808253143",
  resume:
    "https://drive.google.com/file/d/1NXuj31emBGHnLg7BuzHu-TSN4oJfF--K/view?usp=sharing"
};

export const navigation = [
  {label: "About", href: "#about"},
  {label: "Work", href: "#experience"},
  {label: "Projects", href: "#projects"},
  {label: "Education", href: "#education"},
  {label: "Achievements", href: "#achievements"},
  {label: "Certifications", href: "#certifications"},
  {label: "Contact", href: "#contact"}
];

export const socials = [
  {label: "GitHub", href: "https://github.com/anand232326"},
  {label: "LinkedIn", href: "https://www.linkedin.com/in/anandkumar123/"},
  {label: "Email", href: `mailto:${profile.email}`}
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Python",
      "JavaScript",
      "Node.js",
      "FastAPI",
      "React.js"
    ]
  },
  {
    title: "Web & API Development",
    skills: [
      "REST APIs",
      "Microservices",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "WebSockets"
    ]
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "GCP", "Azure"]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Firebase",
      "Postman",
      "LLMs & NLP",
      "Cursor"
    ]
  }
];

export const experience = [

  {
    role: "Project Technical Support-II",
    company: "SBILab - IIIT Delhi",
    url: "https://sbilab.iiitd.edu.in/work.html",
    date: "Aug 2025 - Apr 2026",
    logo: sbiLabLogo,
    description:
      "Designed and developed backend components and RESTful APIs for production-grade healthcare software with React clinician-facing tools.",
    highlights: [
      "Built neurological data pipelines for brain MRI analysis with AIIMS Delhi (PET-MRI fusion, hippocampal detection).",
      "Implemented HIPAA-aligned FastAPI workflows for sensitive patient data under DP/DT Act requirements.",
      "Designed PostgreSQL architecture across 20+ tables; processed 10M+ haematology records with validation pipelines.",
      "Rendered 10B+ pixel gigapixel images with OpenSeadragon/Annotorious for clinical review and annotation.",
      "Integrated trained ML models into backend systems, reducing inference latency by 20%."
    ],
    tags: ["FastAPI", "PostgreSQL", "Clinical AI"],
    link: ""
  },

  {
    role: "Software Developer",
    company: "Odion Learning Pvt. Ltd. (EdTech)",
    url: "",
    date: "Jan 2025 - Mar 2026",
    logo: '',
    description:
      "Designed and developed backend components and RESTful APIs for production-grade Edtech software with React and python.",
    highlights: [
      "Built a Student Enquiry & Lead Management System (CRM) with end-to-end tracking of prospective students,cutting manual lead management effort by 40%.",
      "Automated lead assignment, follow-up tracking, status updates and dashboard reporting, reducing manual administrative work by 50%.",
      "Optimized backend modules and PostgreSQL queries to efficiently manage 500+ active leads.",
     
    ],
    tags: ["FastAPI", "PostgreSQL", "Clinical AI"],
    link: ""
  }
];

export const projects = [
  {
    name: "Financial Intelligence RAG Architecture",
    eyebrow: "",
    description:
      "",
    url: "",
    github_url: "https://github.com/anand232326/RAG",
    logo: '',
    tags: [""]
  },
  {
    name: "MediGraph",
    eyebrow: "",
    description:
      "MediGraph is a React + Vite disease knowledge graph explorer. It lets users search diseases, view disease-linked genes, pathways, drugs, and publications, and compare two diseases side by side in an interactive graph.",
    url: "",
    github_url: "https://github.com/anand232326/medigraph",
    logo: '',
    tags: [""]
  },
  {
    name: "Desi_Diet",
    eyebrow: "Startup platform",
    description:
      "",
    url: "",
    github_url: "https://github.com/anand232326/LittiHub",
    logo: '',
    tags: ["Product", "Web", "Startup"]
  },

];

export const education = [
  {
    institution: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    degree: "B.Tech - Information Technology",
    date: "2021 - 2025",
    score: "7 / 10",
    logo: '',
    abbreviation: "AKTU",
    label: "Undergraduate"
  },
  {
    institution: "Sun Flower Public School (SPS)",
    degree:
      "Intermediate - English, Mathematics, Computer Science, Physics, Chemistry",
    date: "2020",
    score: "84.4%",
    logo: '',
    abbreviation: "SPS",
    label: "Secondary"
  }
];

export const achievements = [
  {
    title: "Driver Drowsiness Detection System idea",
    description:
      "1st place at Swalakshaya (Wifi-Idea) for presenting a Driver Drowsiness Detection System idea. - Batch 2021–2025.",
    logo: '',
    label: "Academic distinction",
    link: "",
    linkLabel: "View marksheet"
  },
  
 
];

export const certifications = [
  {
    title: "IPython 101 for Data Science",
    issuer: "Cognitive Class.AI",
    date: "Jul 2023"
  },
 
];

export const volunteering = [
  // your data items here
];
