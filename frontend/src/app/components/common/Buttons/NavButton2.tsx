import Link from 'next/link';

interface NavButton2Props {
  href: string;
  children: React.ReactNode;
  isHome?: boolean;
  className?: string;
}

const NavButton2: React.FC<NavButton2Props> = ({ href, children, isHome = false }) => {
  return (
    <Link 
      href={href} 
      className={`text-base tracking-widest font-semibold ${isHome ? 'text-[#ffffff]' : 'text-[#D8DCFF]'} hover:scale-105 hover:text-[#FF64AE] transition-all`}
    >
      {children}
    </Link>
  );
};

export default NavButton2;