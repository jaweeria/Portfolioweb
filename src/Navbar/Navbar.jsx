import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger + Close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#222831] text-white border-b-2 border-[#EEEEEE1A]">
      <nav className="flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <h1>SaulDesign</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 text-lg bg-[#222831]">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Aboutme" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
