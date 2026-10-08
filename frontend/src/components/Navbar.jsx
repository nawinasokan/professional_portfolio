import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Summary', id: 'career-summary' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'qualifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/pdf/Nawin_Asokan_Resume.pdf`;
    link.download = 'Nawin_Asokan_Resume.pdf';
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      let current = '';
      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 w-[92%] md:w-[80%] lg:w-[70%] mx-auto left-0 right-0 z-50 rounded-2xl px-5 md:px-6 py-2.5 border transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md backdrop-saturate-150 border-white/10 shadow-xl'
          : 'bg-white/10 backdrop-blur-md backdrop-saturate-150 border-white/20 shadow-lg'
      } text-white`}
    >
      <div className="flex justify-between items-center">
        <a
          href="#home"
          className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
        >
          Nawin Asokan
        </a>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="lg:hidden focus:outline-none text-white"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          <ul className="flex space-x-5 xl:space-x-7 text-sm">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition duration-200 ${
                    activeId === item.id ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={downloadResume}
            className="flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mt-3 lg:hidden flex flex-col space-y-1 text-sm">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`block px-2 py-1.5 rounded-lg transition duration-200 ${
                activeId === item.id ? 'text-blue-400 font-semibold bg-white/5' : 'hover:text-blue-400 hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              downloadResume();
              handleNavClick();
            }}
            className="mt-2 flex items-center justify-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
