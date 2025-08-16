import React from 'react';
import Logo from '../../assets/logo.png';
import { IoSearch } from 'react-icons/io5';
import { GoHeartFill } from 'react-icons/go';
import { HiMiniShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="max-w-[1300px] p-12 mx-auto h-[14vh] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex w-15 h-15 bg-zinc-100 rounded-full p-2">
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </a>

        {/* Nav actions */}
        <div className="flex items-center gap-x-5">
          {/* Search bar */}
          <div className="flex p-1 rounded-full border-2 border-blue-600">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}

          <button className="text-[1.7rem] text-zinc-800">
            <GoHeartFill />
          </button>
          <button className="text-[1.7rem] text-zinc-800">
            <HiMiniShoppingBag />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
