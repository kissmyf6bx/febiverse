'use client';

import Link from 'next/link';

const Card = ({ title, description, href }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-xl hover:shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-base text-gray-300 mb-6">{description}</p>
      <Link href={href} className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition-colors duration-300">
        Book Now
      </Link>
    </div>
  );
};

export default Card;