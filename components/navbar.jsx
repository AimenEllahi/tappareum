import React, { useState } from 'react';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 bg-transparent text-white flex justify-between items-center z-50 py-4 px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className="text-2xl font-bold"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        Logo
      </h1>
      <div
        className="flex"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        <a href="#home" className="px-4">Home</a>
        <a href="#about" className="px-4">About</a>
        <a href="#projects" className="px-4">Projects</a>
        <a href="#contact" className="px-4">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
