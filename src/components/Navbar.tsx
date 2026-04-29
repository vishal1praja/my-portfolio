//import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm dark:shadow-zinc-900/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary tracking-tighter"
          >
            Portfolio<span className="text-foreground">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto', display: 'block' },
          closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } }
        }}
        className="md:hidden bg-background/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
