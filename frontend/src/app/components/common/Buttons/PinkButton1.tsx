import Link from 'next/link';
import React from 'react';

interface PinkButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
}

const PinkButton: React.FC<PinkButtonProps> = ({ href, type, onClick, children }) => {
  const className = "px-14 py-2 border-2 rounded-full border-[#FF64AE] bg-[#FF64AE] text-base tracking-widest text-white font-semibold h-[58px] hover:scale-105 hover:bg-white hover:text-[#FF64AE] transition-all inline-flex items-center justify-center whitespace-nowrap";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default PinkButton;