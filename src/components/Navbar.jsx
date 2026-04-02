import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-center items-center relative">
        
        {/* Mobile Menu Button - Absolute positioned on mobile */}
        <div className="w-full flex justify-between items-center md:hidden mb-2">
          {/* Logo on mobile aligned left for better UX */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="cursor-pointer"
          >
            <img src={logo} alt="AnnaSaar Logo" className="h-12 w-auto object-contain rounded-full" />
          </Link>

          <button
            className="text-cream hover:text-turmeric focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Logo (Desktop) */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          className="hidden md:block cursor-pointer transition-all duration-300"
        >
          <img 
            src={logo} 
            alt="AnnaSaar Logo" 
            className={`object-contain rounded-full transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16 lg:h-20'}`} 
          />
        </Link>

        {/* Desktop Menu - With Top and Bottom Borders */}
        <div className={`hidden md:flex space-x-12 w-full justify-center transition-all duration-300 ${isScrolled ? 'border-y border-gray-700/50 py-2' : 'border-y border-cream/20 py-4'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-turmeric"
              className="relative group text-cream font-medium text-sm tracking-wider uppercase transition-colors hover:text-turmeric cursor-pointer"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-turmeric transition-all duration-300 group-hover:w-full"
              ></motion.span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md overflow-hidden shadow-xl border-t border-gray-800"
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-turmeric"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream text-lg font-medium hover:text-turmeric cursor-pointer border-b border-gray-800 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
