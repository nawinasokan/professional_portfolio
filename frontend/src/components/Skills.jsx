import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const Skills = ({ skills }) => {
  const skillCategories = [...new Set(skills.map(skill => skill.category))];
  
  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'from-blue-500 to-purple-500',
      'Framework': 'from-green-500 to-blue-500',
      'Database': 'from-purple-500 to-pink-500',
      'Backend': 'from-orange-500 to-red-500',
      'AI': 'from-orange-400 to-red-300',
      'Tools': 'from-cyan-500 to-teal-500',
      'DevOps': 'from-indigo-500 to-purple-500',
      'Cloud': 'from-yellow-500 to-orange-500',
      'Soft Skills': 'from-pink-500 to-rose-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 transform skew-y-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-1 h-8 bg-gradient-to-b ${getCategoryColor(category)} rounded-full mr-4`}></div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {getSkillsByCategory(category).map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30 group-hover/skill:bg-purple-500/30 transition-colors">
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-gray-700 group-hover/skill:bg-gray-600 transition-colors"
                          />
                          <div 
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill summary cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {skills.filter(s => s.category === 'Programming').length}
                </div>
                <div className="text-gray-300">Programming Languages</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {skills.filter(s => s.category === 'Framework').length}
                </div>
                <div className="text-gray-300">Frameworks & Libraries</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
                <div className="text-gray-300">Average Proficiency</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;