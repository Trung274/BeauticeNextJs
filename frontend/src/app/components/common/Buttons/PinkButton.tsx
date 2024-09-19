import Link from 'next/link';

interface PinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const PinkButton: React.FC<PinkButtonProps> = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="px-10 py-2 border-2 rounded-full border-[#FF64AE] bg-[#FF64AE] text-sm tracking-widest text-white font-semibold h-[52px] hover:scale-105 hover:bg-white hover:text-pink-400 transition-all inline-flex items-center justify-center whitespace-nowrap"
    >
      {children}
    </Link>
  );
};

export default PinkButton;

