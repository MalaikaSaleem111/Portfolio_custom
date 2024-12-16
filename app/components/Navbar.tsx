"use client"
import { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import "../styles/navbar.css"; // Import the custom CSS file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">Malaika</div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <LuMenu size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
