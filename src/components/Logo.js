'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Febiverse Logo" width={50} height={50} className="hover:scale-170 transition-transform duration-300 cursor-pointer" />
    </Link>
  );
};

export default Logo;