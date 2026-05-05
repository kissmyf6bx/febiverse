'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Menu from './Menu';
import Loader from './Loader';
import MenuCloud from './MenuCloud'; 

const Header = () => {
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
      {isLoading && <Loader />}
      <div className="fixed top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        <Logo onClick={handleLinkClick} />
        <div className="relative">
          <MenuCloud />
          <MenuButton onClick={toggleMenu} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />
    </>
  );
};

export default Header;