import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform -skew-y-3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content card */}
                <div className="ml-20">
                  <Card className="bg-gray-800/50 border-gray-700 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-500 group-hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-400 font-semibold mb-2">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end space-y-2">
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;