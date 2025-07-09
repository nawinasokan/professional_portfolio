import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';

const Projects = ({ projects }) => {
  const getProjectIcon = (techStack) => {
    if (techStack.some(tech => tech.includes('Django') || tech.includes('Flask'))) {
      return <Server className="w-6 h-6 text-blue-400" />;
    } else if (techStack.some(tech => tech.includes('React') || tech.includes('Frontend'))) {
      return <Code className="w-6 h-6 text-green-400" />;
    } else if (techStack.some(tech => tech.includes('Database') || tech.includes('SQL'))) {
      return <Database className="w-6 h-6 text-purple-400" />;
    }
    return <Code className="w-6 h-6 text-blue-400" />;
  };

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 transform -skew-y-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-gray-900/50 border-gray-700 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-gray-900/70 transition-all duration-500 group overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    
                    {/* Project icon overlay */}
                    <div className="absolute top-4 left-4 bg-gray-900/80 p-2 rounded-full backdrop-blur-sm">
                      {getProjectIcon(project.techStack)}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white transition-all duration-300 flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;