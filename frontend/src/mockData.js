const calculateExperienceYears = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const years = (today - start) / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const experienceYears = calculateExperienceYears("2024-08-12");

export const portfolioData = {
  personal: {
    name: "Nawin Asokan",
    title: "Executive - Software Developer",
    tagline: `Python Developer with ${experienceYears}+ years of experience building scalable web applications, REST APIs, and backend solutions`,
    email: "nawinasokan16@gmail.com",
    phone: "+91 8300796919",
    linkedin: "https://linkedin.com/in/nawin-a-dev",
    github: "https://github.com/nawinasokan",
    avatar: "pdf/avatarme.jpeg"
  },

  careerSummary: `Python Developer with ${experienceYears}+ years of experience developing scalable web applications, REST APIs, and backend solutions. Proficient in Django, FastAPI, and Flask, with hands-on deployment experience on AWS and GCP. Skilled in database design and REST API development, ensuring scalable and efficient solutions. Recognized with the Best Project Award (2024) for innovative problem-solving. Passionate about developing scalable Python-based backend solutions in dynamic environments.`,

  experience: [
    {
      id: 1,
      title: "Executive Software Developer",
      company: "Mahima Technology Pvt Ltd",
      duration: "AUG 2024 - Present",
      location: "Salem, Tamil Nadu, India",
      description: "Building backend systems and full-stack projects using Django, FastAPI, PostgreSQL, Celery, and Redis, with deployments on AWS.",
      achievements: [
        "Built backend systems with Django, PostgreSQL, Celery and Redis, including a platform handling 150M+ rows",
        "Improved database query efficiency by 15% across PostgreSQL and MySQL",
        "Deployed and maintained applications on AWS (EC2, S3) with 99% uptime",
        "Delivered a full-stack project with FastAPI endpoints and a JavaScript/Bootstrap front end"
      ]
    }
  ],

  qualifications: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Sona College of Technology (Anna University)",
      duration: "Aug 2020 - May 2024",
      grade: "CGPA: 8.46/10",
      description: "Salem, Tamil Nadu"
    },
    {
      id: 2,
      degree: "Python Programming Certification",
      institution: "Livewire India",
      duration: "2024",
      grade: "Grade: A",
      description: "Comprehensive Python programming course covering advanced concepts"
    },
    {
      id: 3,
      degree: "Cloud Computing Certification",
      institution: "Livewire India",
      duration: "2024",
      grade: "Grade: A",
    description: "Comprehensive cloud infrastructure, virtualization, AWS services and cloud security practices."
    }
  ],

  achievements:[
    {
      id: 1,
      title: "Best Project Award",
      description: "Recognized with the Best Project Award for innovative problem-solving in software development.",
      image_url: "pdf/nawin_award.jpg",
      year: 2024
    },
    {
      id: 2,
      title: "Graduation",
      description: "Graduated with a Bachelor of Engineering in Electronics and Communication.",
      image_url: "pdf/graduation.jpeg",
      year: 2024
    }
  ],
  
  skills: [
    { name: "Python", level: 90, category: "Programming" },
    { name: "SQL", level: 80, category: "Programming" },
    { name: "JavaScript", level: 70, category: "Programming" },
    { name: "Django", level: 95, category: "Framework" },
    { name: "FastAPI", level: 80, category: "Framework" },
    { name: "Flask", level: 75, category: "Framework" },
    { name: "React.js", level: 65, category: "Framework" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "SQLite", level: 75, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "Docker", level: 60, category: "DevOps" },
    { name: "Linux", level: 70, category: "DevOps" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "GCP", level: 60, category: "Cloud" },
    { name: "Problem Solving", level: 88, category: "Soft Skills" },
    { name: "Team Collaboration", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 95, category: "Soft Skills" }
  ],

  projects: [
    {
      id: 1,
      title: "Audio Annotation & Transcription",
      description: "Multi-stage audio annotation and transcription platform with AI-powered transcription, translation, task workflows, and role-based access control. Integrated Google Gemini AI APIs for automated speech-to-text transcription and translation, reducing manual annotation effort by 50%.",
      techStack: ["Django", "Python", "PostgreSQL", "Gemini API"],
      githubUrl: "https://github.com/nawinasokan/budgetplan",
      liveUrl: "https://github.com/nawinasokan/budgetplan",
      image: "pdf/audio-annotation-workspace.png"
    },
    {
      id: 2,
      title: "F1 — Enterprise QC Audit & Reporting Platform",
      description: "Multi-module audit and reporting platform with Excel ingestion, dynamic field mapping, 8+ report engines, and real-time dashboards handling 150M+ rows. Improved batch upload throughput by 5.2x and query performance by up to 78x through PostgreSQL partitioning, indexing, and query optimization.",
      techStack: ["Django", "PostgreSQL", "Celery", "Redis"],
      githubUrl: "https://github.com/nawinasokan/budgetplan",
      liveUrl: "https://github.com/nawinasokan/budgetplan",
      image: "pdf/bp.jpeg"
    },
    {
      id: 3,
      title: "Smart AI Assist",
      description: "Single-page AI web app for email drafting, blog writing, and text summarization with async API calls and response caching, achieving <2s response latency. Reusable prompt-engineering layer for 3 content types, reducing token usage by 25%.",
      techStack: ["Python", "Flask", "Gemini API", "JavaScript"],
      githubUrl: "https://github.com/nawinasokan/Smart_Ai",
      liveUrl: "https://smart-ai-mocha.vercel.app/login",
      image: "pdf/smart_ai_workspace.png"
    }
  ]
};
