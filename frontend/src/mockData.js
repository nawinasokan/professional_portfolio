export const portfolioData = {
  personal: {
    name: "Nawin A",
    title: "Software Developer",
    tagline: "Python Developer with 1 year of experience seeking new opportunities",
    email: "nawinasokan16@gmail.com",
    phone: "+91 8300796919",
    linkedin: "https://linkedin.com/in/nawin-a-dev",
    github: "https://github.com/nawinasokan",
    avatar: "pdf/avatar.jpg"
  },
  
  careerSummary: "Passionate Python Developer with 1+ year of hands-on experience in web development, API design, and data processing. Proficient in Django, Flask, and modern web technologies. Strong problem-solving skills with a focus on writing clean, efficient code. Experienced in working with databases, REST APIs, and cloud platforms. Seeking opportunities to contribute to innovative projects and grow in a dynamic development environment.",
  
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
      title: "Software Developer",
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
      title: "Task Management API",
      description: "RESTful API built with Django REST Framework for task management with user authentication, CRUD operations, and real-time notifications.",
      techStack: ["Django", "PostgreSQL", "Redis", "Celery", "JWT"],
      githubUrl: "https://github.com/nawin-a/task-management-api",
      liveUrl: "https://task-api-demo.herokuapp.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard using Streamlit and Plotly for visualizing sales data with real-time updates and filtering capabilities.",
      techStack: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
      githubUrl: "https://github.com/nawin-a/data-dashboard",
      liveUrl: "https://data-dashboard-app.streamlit.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "E-commerce Web App",
      description: "Full-stack e-commerce application with Django backend, React frontend, payment integration, and inventory management.",
      techStack: ["Django", "React", "PostgreSQL", "Stripe", "Bootstrap"],
      githubUrl: "https://github.com/nawin-a/ecommerce-app",
      liveUrl: "https://ecommerce-demo.netlify.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Weather Forecast API",
      description: "Flask-based API that aggregates weather data from multiple sources and provides forecasts with caching and rate limiting.",
      techStack: ["Flask", "SQLite", "Redis", "OpenWeatherMap API", "Docker"],
      githubUrl: "https://github.com/nawin-a/weather-api",
      liveUrl: "https://weather-forecast-api.herokuapp.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
    }
  ]
};