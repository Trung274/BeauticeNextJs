"use client"

import React, { useState } from 'react';
import NavButton from '../Buttons/NavButton';
import PinkButton from '../Buttons/PinkButton';
import MainLogo from '../../../../public/assets/MainLogo';
import ToggleButton from '../Buttons/ToggleButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home +', isHome: true },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact', isPink: true }
  ];

  const renderMenuItem = (item: { href: string; label: string; isHome: boolean; isPink?: undefined; } | { href: string; label: string; isHome?: undefined; isPink?: undefined; } | { href: string; label: string; isPink: boolean; isHome?: undefined; }) => {
    if (item.isPink) {
      return <PinkButton key={item.href} href={item.href}>{item.label}</PinkButton>;
    }
    return <NavButton key={item.href} href={item.href} isHome={item.isHome}>{item.label}</NavButton>;
  };

  return (
    <header className="w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <MainLogo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map(renderMenuItem)}
          </nav>

          {/* Toggle Button for Mobile */}
          <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-grow">
            <ul className="px-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.href} onClick={toggleMenu}>
                  {renderMenuItem(item)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 md:hidden" 
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;