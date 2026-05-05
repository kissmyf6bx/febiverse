'use client';

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-80 text-white p-4 text-center border-t border-gray-700">
      <div className="max-w-7xl mx-auto text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Febiverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;