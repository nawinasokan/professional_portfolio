import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = ({ personalData }) => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      link: `mailto:${personalData.email}`,
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      link: `tel:${personalData.phone}`,
      color: 'text-green-400 hover:text-green-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: personalData.linkedin,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      link: personalData.github,
      color: 'text-gray-400 hover:text-gray-300'
    }
  ];

  return (
    <footer className="py-20 bg-gray-900 relative overflow-hidden" id='contact'>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-purple-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-500 group">
                <CardContent className="p-6">
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color} transition-colors duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm actively seeking new opportunities where I can contribute my Python development skills and grow as a software developer. Let's connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${personalData.email}?subject=Job Opportunity&body=Hi Nawin, I'd like to discuss a potential opportunity with you.`}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
                <a 
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} {personalData.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TailwindCSS, and passion for clean code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;