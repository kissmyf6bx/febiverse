'use client';

import { RxHamburgerMenu } from 'react-icons/rx'; 

const MenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
    >
      <RxHamburgerMenu className="w-8 h-8 text-white" />
    </button>
  );
};

export default MenuButton;