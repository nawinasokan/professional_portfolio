import React from 'react';
import { Card, CardContent } from './ui/card';

const CareerSummary = ({ summary }) => {
  return (
    <section id="career-summary" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform skew-y-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-700 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
            <CardContent className="p-8">
              <div className="relative">
                <p className="text-gray-300 text-lg leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  {summary}
                </p>
              </div>

              {/* Animated highlight bars */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Python
                  </div>
                  <div className="text-gray-400 text-sm">Primary Stack</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerSummary;