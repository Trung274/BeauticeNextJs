import Link from 'next/link';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isHome?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, isHome = false }) => {
  return (
    <Link 
      href={href} 
      className={`text-base tracking-wide font-semibold ${isHome ? 'text-[#41487F]' : 'text-[#8B8B8B]'} hover:scale-105 hover:text-[#FF64AE] transition-all`}
    >
      {children}
    </Link>
  );
};

export default NavButton;