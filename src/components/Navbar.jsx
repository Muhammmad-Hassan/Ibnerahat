import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Title */}
        <div className="flex items-center">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <span className="text-zinc-800 text-lg font-bold">WOW CAFE</span>
        </div>

        {/* Right side: Menu */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-zinc-800 hover:text-gray-500 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-zinc-800 hover:text-gray-500 font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#foods" className="text-zinc-800 hover:text-gray-500 font-semibold">
                Foods
              </a>
            </li>
            <li>
              <a href="#contact" className="text-zinc-800 hover:text-gray-500 font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
