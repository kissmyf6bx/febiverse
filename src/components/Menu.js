'use client';

import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';

const Menu = ({ isOpen, toggleMenu, handleLinkClick }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-95 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full text-center text-white font-sans">
        <button onClick={toggleMenu} className="absolute top-6 right-6 p-2 text-white hover:text-gray-400 transition-colors duration-200">
          <RxCross1 className="w-8 h-8" />
        </button>
        <nav className="space-y-8 text-4xl font-light tracking-wide">
          <Link href="/" onClick={handleLinkClick} className="block hover:text-green-400 transition-colors duration-200">Home</Link>
          <Link href="/about" onClick={handleLinkClick} className="block hover:text-green-400 transition-colors duration-200">About</Link>
          <Link href="/projects" onClick={handleLinkClick} className="block hover:text-green-400 transition-colors duration-200">My Projects</Link>
          <Link href="/services" onClick={handleLinkClick} className="block hover:text-green-400 transition-colors duration-200">Services Offered</Link>
          <Link href="/collaborate" onClick={handleLinkClick} className="block hover:text-green-400 transition-colors duration-200">Let&apos;s Collaborate</Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;