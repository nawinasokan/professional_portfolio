export const portfolioData = {
  personal: {
    name: "Nawin A",
    title: "Software Developer",
    tagline: "Python Developer with 1 year of experience seeking new opportunities",
    email: "nawin.a@example.com",
    phone: "+91 9876543210",
    linkedin: "https://linkedin.com/in/nawin-a",
    github: "https://github.com/nawin-a",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  careerSummary: "Passionate Python Developer with 1+ year of hands-on experience in web development, API design, and data processing. Proficient in Django, Flask, and modern web technologies. Strong problem-solving skills with a focus on writing clean, efficient code. Experienced in working with databases, REST APIs, and cloud platforms. Seeking opportunities to contribute to innovative projects and grow in a dynamic development environment.",
  
  experience: [
    {
      id: 1,
      title: "Python Developer",
      company: "TechStart Solutions",
      duration: "Jan 2024 - Present",
      location: "Bangalore, India",
      description: "Developing web applications using Django and Flask frameworks. Built REST APIs for mobile applications and implemented database optimization strategies.",
      achievements: [
        "Developed 5+ web applications using Django framework",
        "Improved API response time by 40% through optimization",
        "Collaborated with cross-functional teams on agile projects"
      ]
    },
    {
      id: 2,
      title: "Python Intern",
      company: "DataFlow Systems",
      duration: "Jun 2023 - Dec 2023",
      location: "Chennai, India",
      description: "Worked on data processing pipelines and automated reporting systems. Gained experience in pandas, NumPy, and data visualization libraries.",
      achievements: [
        "Built automated data processing scripts reducing manual work by 60%",
        "Created interactive dashboards using Plotly and Streamlit",
        "Participated in code reviews and followed best practices"
      ]
    }
  ],
  
  qualifications: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Anna University",
      duration: "2020 - 2024",
      grade: "CGPA: 8.2/10",
      description: "Specialized in software engineering, data structures, and algorithms"
    },
    {
      id: 2,
      degree: "Python Programming Certification",
      institution: "Coursera - University of Michigan",
      duration: "2023",
      grade: "Grade: A",
      description: "Comprehensive Python programming course covering advanced concepts"
    },
    {
      id: 3,
      degree: "Django Web Framework Certification",
      institution: "Udemy",
      duration: "2023",
      grade: "Grade: 95%",
      description: "Advanced Django development including REST APIs and deployment"
    }
  ],
  
  skills: [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Django", level: 85, category: "Framework" },
    { name: "Flask", level: 75, category: "Framework" },
    { name: "JavaScript", level: 70, category: "Programming" },
    { name: "React", level: 65, category: "Framework" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "REST APIs", level: 85, category: "Backend" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "Docker", level: 60, category: "DevOps" },
    { name: "AWS", level: 55, category: "Cloud" },
    { name: "Problem Solving", level: 88, category: "Soft Skills" },
    { name: "Team Collaboration", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 82, category: "Soft Skills" }
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