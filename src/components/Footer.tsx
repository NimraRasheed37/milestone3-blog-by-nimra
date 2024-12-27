import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#493638] text-[#ffd791] w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold flex pr-8 md:pr-auto items-center">
              Book<span className="text-[#e4b1ab]">W</span>orms
            </div>
            <p className="mt-2 text-sm">{`"Celebrating books, one blog at a time."`}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/blogs" className="hover:underline">
              Blogs
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 hover:text-[#3b5998]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-[#00acee]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-[#C13584]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6 hover:text-[#0077b5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Under Footer Section */}
      <div className="bg-[#da5552] text-white text-center py-2">
        <p className="text-sm">© 2024 nimra_rasheed. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
