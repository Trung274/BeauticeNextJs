import Link from 'next/link';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isHome?: boolean;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, isHome = false }) => {
  return (
    <Link 
      href={href} 
      className={`text-base font-medium text-[#FF64AE]} hover:scale-105 hover:text-[8B8B8B] transition-all`}
    >
      {children}
    </Link>
  );
};

export default NavButton;