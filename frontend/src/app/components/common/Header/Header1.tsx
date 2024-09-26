import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavButton from '../Buttons/NavButton';
import PinkButton from '../Buttons/PinkButton';
import MainLogo from '../../../../public/assets/MainLogo';
import ToggleButton from '../Buttons/ToggleButton';
import { useAuth } from '../../../context/AuthContext';
import { logoutUser } from '../../../system/api'

type MenuItem = {
  href: string;
  label: string;
  isHome?: boolean;
  isPink?: boolean;
};

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    try {
      await logoutUser();
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const menuItems: MenuItem[] = [
    { href: '/home2', label: 'Home +', isHome: true },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact', isPink: true }
  ];

  const renderMenuItem = (item: MenuItem) => {
    if (item.isPink) {
      return <PinkButton key={item.href} href={item.href}>{item.label}</PinkButton>;
    }
    return <NavButton key={item.href} href={item.href} isHome={item.isHome}>{item.label}</NavButton>;
  };

  // Updated avatar URL with custom color
  const avatarUrl = user ? `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(user.name)}&backgroundColor=FF64AE` : '';

  return (
    <header className="w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <MainLogo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map(renderMenuItem)}
            {user ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center space-x-2">
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{user.name}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <PinkButton href="/auth/login">Login / Register</PinkButton>
            )}
          </nav>

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
              {user ? (
                <>
                  <li>
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <PinkButton href="/auth/login" onClick={toggleMenu}>Login / Register</PinkButton>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 md:hidden" 
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header1;