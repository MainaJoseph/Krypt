import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";


import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";




import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-start justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial  ">
      <NavBarItem title="Market" />
        <NavBarItem  title="Trade"  />
        <NavBarItem title="Exchange" />
        <NavBarItem title="Tutorials" />
        <NavBarItem title="Wallet" >

        </NavBarItem>
        
        <a href="/Signup">
        <button
         className="transition ease-in-out delay-150 bg-[#2952e3] py-2 px-7 mx-4 rounded-md cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-[#1de1fd] font-semibold">
          Register
        </button>
        </a>
        
        
        <button className="transition ease-in-out delay-150 bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-[#1de1fd] duration-300 font-semibold">
        
          Login
        </button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market","Trade", "Exchange", "Tutorials", "Wallet"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
           <ul className="h-56 grid grid-cols-2 gap-15 content-start w-[70vw] h-screen shadow-2xl md:hidde list-none">
              <button className="transition ease-in-out delay-150 bg-[#2952e3] py-2 px-7 mx-4 rounded-md cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-[#1de1fd] font-semibold">
          Register
        </button>
        <button className="transition ease-in-out delay-150 bg-[#2952e3] py-2 px-7 mx-4 rounded-md cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-[#1de1fd] font-semibold">
          Login
        </button>
           </ul>
          </ul>
        )}
       
      </div>
    </nav>
  );
};

export default Navbar;