import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavButton2 from '../Buttons/NavButton2';
import PinkButton0 from '../Buttons/PinkButton0';
import Image from 'next/image';
import Link from 'next/link';
import MainLogoWhite from '@/public/assets/MainLogoWhite.svg';
import ToggleButton from '../Buttons/ToggleButton';
import { useAuth } from '@/app/context/AuthContext';
import { logoutUser } from '@/app/system/api'

type MenuItem = {
  href: string;
  label: string;
  isHome?: boolean;
  isPink?: boolean;
  spacing?: string;
};

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, hasToken, logout } = useAuth();
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
    { href: '/home2', label: 'Home +', isHome: true, spacing: 'mr-[21px]' },
    { href: '/about', label: 'About', spacing: 'mr-[21px]' },
    { href: '/services', label: 'Service', spacing: 'mr-[21px]' },
    { href: '/gallery', label: 'Gallery', spacing: 'mr-[21px]' },
    { href: '/blog', label: 'Blog', spacing: 'mr-[21px]' },
    { href: '/contact', label: 'Contact', isPink: true, spacing: 'mr-[21px]'}
  ];

  const renderMenuItem = (item: MenuItem) => {
    const itemClasses = `${item.spacing || ''}`;

    if (item.isPink) {
      return (
        <div className={itemClasses}>
          <PinkButton0 key={item.href} href={item.href}>{item.label}</PinkButton0>
        </div>
      );
    }
    return (
      <div className={itemClasses}>
        <NavButton2 key={item.href} href={item.href} isHome={item.isHome}>{item.label}</NavButton2>
      </div>
    );
  };

  // Updated avatar URL with custom color
  const avatarUrl = user ? `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(user.name)}&backgroundColor=FF64AE` : '';

  return (
    <header className="w-full relative pt-5 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center space-x-1.5 py-4">
        <div className="flex-shrink-0 xl:pl-[38px] pt-1">
        <Link href="/">
              <Image
                src={MainLogoWhite}
                alt="Main Logo"
                width={258}
                height={41}
                priority
              />
            </Link>
          </div>

          <nav className="hidden xl:flex items-center pb-1 pr-9">
            {menuItems.map(renderMenuItem)}
            {hasToken ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#FF64AE] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <PinkButton0 href="/auth/login">Login / Register</PinkButton0>
            )}
          </nav>

          <div className="block xl:hidden">
            <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-[#091156] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } xl:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            <ul className="px-6 space-y-6 mt-6">
              {menuItems.map((item) => (
                <li key={item.href} onClick={toggleMenu} className="w-full">
                  {item.isPink ? (
                    <PinkButton0 href={item.href} className="w-full justify-center">{item.label}</PinkButton0>
                  ) : (
                    <NavButton2 href={item.href} isHome={item.isHome} className="w-full justify-start">{item.label}</NavButton2>
                  )}
                </li>
              ))}
              {hasToken ? (
                <>
                  <li>
                    <a href="/profile" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block w-full text-left py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <PinkButton0 href="/auth/login" onClick={toggleMenu} className="w-full justify-center">Login / Register</PinkButton0>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header1;