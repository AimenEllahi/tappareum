import React, { useState } from 'react';

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-16 bg-transparent text-white flex justify-between items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="text-xl font-bold mx-4"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        Footer Content
        <div className="text-sm mt-2">
          Address: 123 Main Street, City, Country
        </div>
      </div>
      {/* <div
        className="flex"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        <a href="#privacy-policy" className="px-4">Privacy Policy</a>
        <a href="#terms-of-service" className="px-4">Terms of Service</a>
        <a href="#contact" className="px-4">Contact Us</a>
      </div> */}
      <div
        className="text-sm mx-4"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
