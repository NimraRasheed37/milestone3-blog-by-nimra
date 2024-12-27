'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaBars, FaTimes, FaHome, FaInfoCircle, FaBlog } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#493638] text-[#ffd791] py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between md:justify-around">
        {/* Left: Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#ffd791] pl-4" aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Left: Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-[#da5552] transition-colors duration-300" aria-label="Home">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-[#da5552] transition-colors duration-300" aria-label="Blogs">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-[#da5552] transition-colors duration-300" aria-label="Contact">
            Contact
          </Link>
        </nav>

        {/* Center: Logo */}
        <div className="text-2xl font-bold flex pr-8 md:pr-auto items-center">
          Book<span className="text-[#e4b1ab]">W</span>orms
        </div>

        {/* Right: Social Media Links (Desktop) */}
        <div className="hidden md:flex space-x-4 gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#da5552] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#da5552] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden top-16 left-0 w-full bg-[#493638] text-[#ffd791] p-4 shadow-md">
          <nav className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-[#da5552] transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Home"
            >
              <FaHome size={24} />
              Home
            </Link>
            <Link
              href="/blogs"
              className="flex items-center gap-2 hover:text-[#da5552] transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Blogs"
            >
              <FaBlog size={24} />
              Blogs
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#da5552] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#da5552] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
