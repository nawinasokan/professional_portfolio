const calculateExperienceYears = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const years = (today - start) / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const experienceYears = calculateExperienceYears("2024-08-12");

export const portfolioData = {
  personal: {
    name: "Nawin A",
    title: "Software Developer",
    tagline: `Python Developer with ${experienceYears} years of experience seeking new opportunities`,
    email: "nawinasokan16@gmail.com",
    phone: "+91 8300796919",
    linkedin: "https://linkedin.com/in/nawin-a-dev",
    github: "https://github.com/nawinasokan",
    avatar: "pdf/avatarme.png"
  },
  
  careerSummary: `Passionate Python Developer with ${experienceYears} years of hands-on experience in web development, API design, and data processing. Proficient in Django, Flask, and modern web technologies. Strong problem-solving skills with a focus on writing clean, efficient code. Experienced in working with databases, REST APIs, and cloud platforms. Seeking opportunities to contribute to innovative projects and grow in a dynamic development environment.`,

  experience: [
    {
      id: 1,
      title: "Trainee - Software Development",
      company: "Mahima Technology pvt ltd",
      duration: "AUG 2024 - FEB 2025",
      location: "Salem, India",
      description: "Developing web applications using Django frameworks. Built REST APIs for mobile applications and implemented database optimization strategies.",
      achievements: [
        "Developed 5+ web applications using Django framework",
        "Improved API response time by 40% through optimization",
        "Collaborated with cross-functional teams on agile projects"
      ]
    },
    {
      id: 2,
      title: "Executive - Software Developer",
      company: "Mahima Technology pvt ltd",
      duration: "FEB 2025 - Present",
      location: "Salem, India",
      description: "Worked on AI projects involving model development, training, and deployment using Python and ML libraries.",
      achievements: [
        "Built ML models for real-world use cases",
        "Deployed AI apps with Streamlit and TensorFlow",
        "Improved model accuracy by 15%"
      ]
    }
  ],
  
  qualifications: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Electroics and Communication",
      institution: "Anna University",
      duration: "2020 - 2024",
      grade: "CGPA: 8.4/10",
      description: "Specialized in software engineering, data structures, and algorithms"
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
      title: "Rising Star Award",
      description: "Recognized for exceptional performance and contributions in software development.",
      image_url: "pdf/nawin_award.jpg",
      year: 2026
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
    { name: "JavaScript", level: 70, category: "Programming" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "Django", level: 95, category: "Framework" },
    { name: "Flask", level: 75, category: "Framework" },
    { name: "FastAPI", level: 75, category: "Framework" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "SQLite", level: 75, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Docker", level: 60, category: "DevOps" },
    { name: "AWS", level: 65, category: "Cloud" },
    { name: "Machine Learning", level: 80, category: "AI" },
    { name: "Deep Learning", level: 70, category: "AI" },
    { name: "Scikit-learn", level: 75, category: "AI" },
    { name: "Problem Solving", level: 88, category: "Soft Skills" },
    { name: "Team Collaboration", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 95, category: "Soft Skills" }
  ],
  
  projects: [
    {
      id: 1,
      title: "Task Management and Time Tracking Web Application",
      description: " Productivity web app with role-based dashboards: admins manage tasks and users, users log activities.Real-time status, task duration tracking.",
      techStack: ["Python", "Fast API", "SQLite", "JavaScript", "jQuery"],
      githubUrl: "https://github.com/nawinasokan/budgetplan",
      liveUrl: "https://github.com/nawinasokan/budgetplan",
      // liveUrl: "https://budgetplan-dev.vercel.app/",
      image: "pdf/blackalaram.png"
    },
    {
      id: 2,
      title: "Invoice Data Extraction System Using Gemini AI",
      description: " Built a system that leverages Gemini AI to extract invoice data from PDF and image files with high accuracy using OCR and machine learning.",
      techStack: ["Python", "Gemini API", "Django", "JavaScript", "PostgreSQL"],
      githubUrl: "https://github.com/nawinasokan/budgetplan",
      // liveUrl: "https://budgetplan-dev.vercel.app/",
      liveUrl: "https://github.com/nawinasokan/budgetplan",
      image: "pdf/blackinvoice.jpg"
    },
    { 
      id: 3,
      title: "Smart AI Assist",
      description: "Single-page AI tool that generates content like emails, blogs, summaries, and code using Gemini API, built with Flask and Bootstrap.",
      techStack: ["Python", "Gemini API", "Flask", "Bootstrap"],
      githubUrl: "https://github.com/nawinasokan/Smart_Ai",
      liveUrl: "https://smart-ai-mocha.vercel.app/login",
      image: "pdf/smart_ai.png"
    },
    { 
      id: 4,
      title: "Budget Planner Application",
      description: "Smart finance tracker with income/expense logging, category-wise analysis, and savings goals. Visual dashboards give real-time insights for better money management.",
      techStack: ["Python", "Django", "JavaScript", "Postgres","Bootstrap"],
      githubUrl: "https://github.com/nawinasokan/budget_app",
      liveUrl: "https://github.com/nawinasokan/budget_app",
      image: "pdf/bp.jpeg"
    }
  ]
};
