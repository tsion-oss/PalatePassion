import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 const [underline, setUnderline] = useState('shop')
 


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
               
                <a href="#" className="text-white md:text-xl text-md font-semibold">
                    PALATEPASSION
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" onClick={() => setUnderline('shop')} className="text-white">Shop {underline ==="shop" ?<hr className="p-2 "></hr> : <></>}</a>
                <a href="#" onClick={() => setUnderline('men')} className="text-white">Men{underline ==="men" ?<hr className="p-2 "></hr> : <></>}</a>
                <a href="#" onClick={() => setUnderline('women')} className="text-white">Women{underline ==="women" ?<hr className="p-2 "></hr> : <></>}</a>
                <a href="#" onClick={() => setUnderline('kids')} className="text-white">Kids{underline ==="kids" ?<hr className="p-2 "></hr> : <></>}</a>
            </div>
            <div className="hidden md:flex  space-x-4">
                <a href="#" className="text-white">Cart</a>
                <a href="#" className="text-white">Login</a>
            </div>
            {!menuOpen ?
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
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
               <button className="text-white md:hidden" onClick={() => toggleMenu(true)}>X</button>
            </div>
            }
            { menuOpen &&
            <div className="md:hidden absolute  right-0 top-14 bg-gray-700 p-4 w-full">
                <a href="#" className="block text-white mb-2">Shop</a>
                <a href="#" className="block text-white mb-2">Men</a>
                <a href="#" className="block text-white mb-2">Women</a>
                <a href="#" className="block text-white mb-2">Kids</a>
                <a href="#" className="block text-white mb-2">Cart</a>
                <a href="#" className="block text-white mb-2">Login</a>
          </div>
            }
          

      </div>
    </nav>
  );
};

export default Navbar;
