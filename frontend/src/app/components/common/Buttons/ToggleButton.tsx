import React from 'react';

interface ToggleButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="10" fill="#FF64AE"/>
        <rect x="18" y="19" width="24" height="2" rx="1" fill="white"/>
        <rect x="18" y="29" width="24" height="2" fill="white"/>
        <rect x="18" y="39" width="24" height="2" fill="white"/>
      </svg>
    </button>
  );
};

export default ToggleButton;