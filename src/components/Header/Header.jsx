'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Smile, MapPin, Clock } from 'lucide-react';
import styles from '@/styles/header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Kénitra, Maroc</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Lun-Sam: 9h-19h</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-300 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://maps.app.goo.gl/vnDpeQJDX8NRUu166" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-300 transition-colors"
            >
              Nous localiser
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src="https://res.cloudinary.com/dylpck2et/image/upload/v1758982023/Coming_soon_dronlq.jpg" 
                    alt="Dr. Athar Essakhi Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold font-display text-secondary-800">
                  Dr. Athar
                </span>
                <span className="text-sm lg:text-base text-primary-600 font-medium">
                  Smile Lounge
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 group py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Phone Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:0700404400"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm lg:text-base">0700404400</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass-effect text-secondary-700 hover:bg-primary-50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-16 left-4 right-4 glass-effect rounded-2xl shadow-2xl border border-primary-100 p-6 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-secondary-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:0700404400"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg font-semibold mt-4 hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler: 0700404400</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;