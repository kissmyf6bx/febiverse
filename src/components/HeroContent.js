'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import TypingEffect from './TypingEffect';
import { FaInstagram, FaYoutube, FaSnapchat, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const samarkan = localFont({
  src: '../fonts/Samarkan.ttf',
  display: 'swap',
  variable: '--font-samarkan',
});

const HeroContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsLoading(true);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <>
     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className={`${samarkan.className} text-7xl font-bold`}>Febiverse</h1>
        <div className="mt-4">
          <TypingEffect />
        </div>
      </div>

      
      <div className="absolute bottom-25 left-1/2 -translate-x-1/2 z-20 flex space-x-6 text-2xl text-white">
        <Link href="https://www.instagram.com/febiverse" target="_blank" className="hover:text-pink-600 transition-colors duration-200">
          <FaInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/febin-sebastian-3a589a337/" target="_blank" className="hover:text-blue-400 transition-colors duration-200">
          <FaLinkedin />
        </Link>
        <Link href="https://youtube.com/@febinnnnn_n?si=3XFnif5CK_UGGSWd" target="_blank" className="hover:text-red-600 transition-colors duration-200">
          <FaYoutube />
        </Link>
        <Link href="https://github.com/Febinseb" target="_blank" className="hover:text-gray-600 transition-colors duration-200">
          <FaGithub />
        </Link>
      </div>
    </>
  );
};

export default HeroContent;