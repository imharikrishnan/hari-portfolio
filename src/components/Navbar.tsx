import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/80 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="text-xl font-bold cursor-pointer hover:text-accent transition-colors"
          >
            HK<span className="text-accent">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-accent transition-colors font-medium text-sm"
                activeClass="text-accent"
                spy={true}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="block py-3 hover:text-accent transition-colors cursor-pointer text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;