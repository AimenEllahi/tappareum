import React, {useState} from 'react';

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
  return (

      <div className="navbar-content relative top-full left-0 bg-gray-800 p-4"
      style={{ display: isHovered ? 'block' : 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       >
        {/* <a href="#" className="block py-2">Home</a>
        <a href="#" className="block py-2">About</a>
        <a href="#" className="block py-2">Contact</a> */}
      </div>
    
  );
}

export default Navbar;
