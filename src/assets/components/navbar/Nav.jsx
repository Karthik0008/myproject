import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Choose Your Style</h1>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-500 md:w-auto md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
         <Link to="/" >  <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <a href="#">Home</a>
          </li></Link>
          <Link to="/about"><li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <a href="#">About</a>
          </li></Link>
         <Link to="/service"> <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <a href="#">Services</a>
          </li></Link>
          <Link to="/contact"><li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <a href="#">Contact</a>
          </li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;