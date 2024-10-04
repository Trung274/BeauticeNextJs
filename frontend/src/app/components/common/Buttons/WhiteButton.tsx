import React from 'react';
import Link from 'next/link';

interface WhiteButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="px-10 py-2 border-2 rounded-[15px] border-white bg-transparent text-sm tracking-widest text-white font-semibold h-[52px] w-[179px] hover:bg-white hover:text-[#FF64AE] transition-all inline-flex items-center justify-center whitespace-nowrap"
    >
      {children}
    </Link>
  );
};

export default WhiteButton;