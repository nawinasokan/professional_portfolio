import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Summary', id: 'career-summary' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="bg-white/10 backdrop-blur-md backdrop-saturate-150 text-white shadow-lg fixed top-3 w-[90%] md:w-[65%] mx-auto left-0 right-0 z-50 rounded-2xl px-6 py-2 border border-white/20">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold">Nawin Portfolio</h1>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white"
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
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
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
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mt-3 md:hidden flex flex-col space-y-2 text-sm">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`block px-2 py-1 transition duration-200 ${
                activeId === item.id ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
