"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Ensure code only runs on the client
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`sticky top-0 py-4 z-10 transition-colors duration-500 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 flex justify-between items-center">
        
        {/* Logo with link to Home page */}
        <Link href="/">
          <div className="w-30 h-14 overflow-hidden">
            <img
              src={isScrolled ? "/logo-bl.png" : "/logo-wh.png"}
              alt="Caeser Nigeria"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        <nav>
          <Link href="/reservation" className="px-5 py-3 bg-black text-white hover:bg-amber-500 hover:text-black transition duration-300">
            Make Reservation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
