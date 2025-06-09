'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Histoire', href: '#histoire' },
    { name: 'Activités', href: '#activites' },
    { name: 'Partenaires', href: '#partenaires' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
            src='/logo.png'
            alt='Logo'
            height={80}
            width={80}
            >

            </Image>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-golden-accent' : 'text-white'} hover:text-golden-accent transition-colors duration-300 font-medium relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-golden-accent text-golden-light px-6 py-2 rounded-full transition-all duration-300 font-medium">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-golden-accent' : 'text-white'} transition-colors duration-300`}
            >
              {isMenuOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6 " />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-golden-light/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-golden-dark hover:text-golden-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-2 bg-golden-primary hover:bg-golden-primary-dark text-golden-light px-6 py-2 rounded-full transition-all duration-300 font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;