import { useState } from "react";
import { NavLink } from 'react-router-dom'

import cart_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /cart_icon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 const [underline, setUnderline] = useState('shop')
 


  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
               
                <NavLink to="/" className="text-Black lg:text-3xl md:text-2xl text-lg font-semibold">
                    PALATEPASSION
                </NavLink>
            </div>
            <div className="text-black hidden md:flex items-center lg:space-x-9 space-x-5">
                <NavLink to="/" onClick={() => setUnderline('shop')} className="">Shop {underline ==="shop" ?<hr className="p-2 border-t-2 border-red-500 "></hr> : <></>}</NavLink>
                <NavLink to="/mens" onClick={() => setUnderline('men')} className="">Men{underline ==="men" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
                <NavLink to="/womens" onClick={() => setUnderline('women')} className="">Women{underline ==="women" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
                <NavLink to="/kids" onClick={() => setUnderline('kids')} className="">Kids{underline ==="kids" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
            </div>
            <div className="hidden md:flex  space-x-6">
            <NavLink to="/login" className="text-black border w-20 h-7 rounded">Login</NavLink>
                <NavLink to="/cart" className="text-white w-7"><img src={cart_icon}/></NavLink>
                
            </div>
            {!menuOpen ?
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 focus:outline-none"
                >
                    <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                </button>
            </div>
            :
            <div>
               <button className="text-gray-800 md:hidden" onClick={() => toggleMenu(true)}>X</button>
            </div>
            }
            { menuOpen &&
            <div className="md:hidden absolute  right-0 top-14 bg-gray-700 p-4 w-full">
                <NavLink to="/" className="block text-white mb-2">Shop</NavLink>
                <NavLink to="/mens" className="block text-white mb-2">Men</NavLink>
                <NavLink to="/womens" className="block text-white mb-2">Women</NavLink>
                <NavLink to="/kids" className="block text-white mb-2">Kids</NavLink>
                <NavLink to="/login" className="block text-white mb-2">Login</NavLink>
                <NavLink to="/cart" className="block text-white mb-2">Cart</NavLink>
                
          </div>
            }
          

      </div>
    </nav>
  );
};

export default Navbar;
