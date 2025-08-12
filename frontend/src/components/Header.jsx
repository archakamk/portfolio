import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-light-lavender">
        <div className="text-2xl font-semibold select-none cursor-default">
          Kalyan
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#hero" className="hover:text-soft-gold transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-soft-gold transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-soft-gold transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-soft-gold transition-colors duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-soft-gold transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
