import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = ({ personalData }) => {
  const downloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/pdf/Nawin__Resume.pdf`;
    link.download = `${personalData.name.replace(' ', '_')}_Resume.pdf`;
    link.click();
  };

  const viewResume = () => {
    // Mock view functionality
    window.open(`${process.env.PUBLIC_URL}/pdf/Nawin__Resume.pdf`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 transform -skew-y-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Resume icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {personalData.name} - {personalData.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get a detailed overview of my professional experience, technical skills, educational background, and project accomplishments. My resume provides comprehensive information about my journey as a Python developer.
                </p>

                {/* Resume features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="group/feature hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-4">
                      <div className="text-blue-400 font-semibold">Experience</div>
                      <div className="text-gray-300 text-sm">Detailed work history</div>
                    </div>
                  </div>
                  <div className="group/feature hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-4">
                      <div className="text-green-400 font-semibold">Skills</div>
                      <div className="text-gray-300 text-sm">Technical expertise</div>
                    </div>
                  </div>
                  <div className="group/feature hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4">
                      <div className="text-purple-400 font-semibold">Projects</div>
                      <div className="text-gray-300 text-sm">Portfolio highlights</div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover/btn:animate-bounce" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={viewResume}
                    className="border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Online
                  </Button>
                </div>

                {/* File info */}
                <div className="mt-6 text-sm text-gray-400">
                  <p>PDF Format • Updated {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;