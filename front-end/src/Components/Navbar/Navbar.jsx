import { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import cart_icon from './cart_icon.png'
import { ShopContext } from "../../Context/ShopContext";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import logo from './logo.png'
import { FaArrowRight } from 'react-icons/fa';


const Navbar = ({ search, handleSearch, searchResults, defaultSearch, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navShow, setNavShow] = useState(true)
  const [underline, setUnderline] = useState('')
  const { getTotalCartItems, CartSwitch } = useContext(ShopContext)

 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNavBar = () => {
    setNavShow(!navShow)
  }

 const navigate = useNavigate()

   const handleCloseAndSearch = () => {
    toggleNavBar(navShow)
    setSearch('')
    
   }

   const handleKeyPress = (event) => {
    if(event.key === 'Enter') {

      event.preventDefault()
    
      if(searchResults && searchResults.length > 0){
        handleSearch(search)
        navigate('/search')
      }

      console.log('Enter key pressed!')
    }
  }

  


  return (
    <nav className="fixed top-0 w-full z-10 bg-white shadow  ">
      <div className="bg-black text-white text-center text-[11px] p-1.5 ">
        Free shipping on orders above $100
      </div>
      <div className="container mx-auto flex items-center justify-between xl:px-[100px]  md:px-[40px] ">
                 {navShow &&
                 <>
                  <div className="lg:flex hidden items-center ">
                    
                      <NavLink to="/" className="text-Black lg:text-xl md:text-l text-md font-semibold ">
                        <img className="w-[80px]" src={logo} alt="" />
                        
                      </NavLink>
                  </div>
                  <div className="text-black hidden lg:flex items-center lg:space-x-9 space-x-5">
                      <NavLink to="/" onClick={() => setUnderline('shop')} className="">Shop {underline ==="shop" ?<hr className="p-2 border-t-2 border-red-500 "></hr> : <></>}</NavLink>
                      <NavLink to="/mens" onClick={() => setUnderline('men')} className="">Men{underline ==="men" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
                      <NavLink to="/womens" onClick={() => setUnderline('women')} className="">Women{underline ==="women" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
                      <NavLink to="/kids" onClick={() => setUnderline('kids')} className="">Kids{underline ==="kids" ?<hr className="p-2 border-t-2 border-red-500"></hr> : <></>}</NavLink>
                      
                  </div>
                  <div className="hidden lg:flex  space-x-6 relative justify-center items-center">
                  
                  {/* <button><FaSearch className="w-5 h-5 " onClick={() => toggleNavBar(false)}/></button> */}
                  <button><svg onClick={() => toggleNavBar(false)}
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      height="1.7em"
                      width="1.7em"
                      
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                        d="M338.29 338.29L448 448"
                      />
                    </svg>
                </button>
                  {/* <NavLink to="/login" className="text-black border w-20 h-7 rounded">Login</NavLink> */}
                  <NavLink> <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="1.5em"
                                width="1.5em"
                                    >
                                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg></NavLink>

                      <NavLink to="/cart" className="text-white w-7"><img src={cart_icon}/>
                      {/* <div className="nav-cart-count bg-red-600 h-[15px] w-[15px] rounded-[50%] text-[10px] text-white absolute -top-1 -right-1 flex justify-center">{getTotalCartItems()}</div> */}
                      </NavLink>
                  </div>
                  </>
                  } 

                   {/* Desktop Search Bar */}
                  {!navShow &&
                  <div className="lg:flex hidden w-[100%] p-3">
                  
                      <input placeholder="search by keyword.."
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-[100%] border border-gray-300  md:flex hidden pl-5"/>
                      <button className="border border-black px-2 mr-2 hover:bg-gray-200 hover:border-gray-400" onClick={() => {searchResults & searchResults.length > 0 && handleSearch(search), navigate('/search')}  }><svg 
                                  viewBox="0 0 512 512"
                                  fill="currentColor"
                                  height="1.7em"
                                  width="1.7em"
                                  
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  />
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M338.29 338.29L448 448"
                                  />
                                </svg></button>
                                <button className='p-2 px-4 md:flex hidden bg-black text-white ' onClick={handleCloseAndSearch}>X</button>
                            
                       
                  </div>
                  }
               
          </div>  



          {/* mobile size */}
            <>
            {!menuOpen ? 
            (navShow && (
            <div className="lg:hidden flex items-center md:p-3 sm:p-3 p-3 mx-3">
                  <div className="flex gap-4 mr-auto items-center">
                      <button
                              onClick={toggleMenu}
                              className="text-gray-800 focus:outline-none"
                          >
                              <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="black"
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
                        <NavLink to="/" className="flex lg:hidden">
                        <img className="w-[60px]" src={logo} alt="" />
                                </NavLink>
                  </div>

                  <div className="lg:hidden flex items-center gap-6">
                       {/* search bar */}
                      <button><svg onClick={() => toggleNavBar(false)}
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          height="1.7em"
                          width="1.7em"
                          
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                          />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M338.29 338.29L448 448"
                          />
                        </svg>
                      </button>
                       {/* favorite */}
                       <NavLink> <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="1.5em"
                                width="1.5em"
                                    >
                                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg></NavLink>
                      <NavLink to="/cart" className="text-white w-7"><img src={cart_icon}/>
                      {/* <div className="nav-cart-count bg-red-600 h-[14px] w-[14px] rounded-[50%] text-[10px] text-white absolute  md:right-4 md:top-12 top-12 right-4 flex justify-center">{getTotalCartItems()}</div> */}
                      </NavLink>
                      
                  </div>
            </div>
            )
            ):(
                <div className="p-4 ">
                  <button className=" text-gray-800 lg:hidden pl-4 hover:text-red-500 active:text-red-500" onClick={() => toggleMenu(true)}>X</button>
                  
                  
                </div>
            )
            }
            </>
             {/* mobile Search Bar */}
                {!navShow && (
                  <div className="lg:hidden flex w-[100%] p-4 px-6">
                 
                     <input  placeholder="search.."
                             value={search}
                             onChange={(e) => handleSearch(e.target.value)}
                             className="w-[100%] border border-gray-300 pl-5"/>
                     <button className="border border-black px-2 mr-2 hover:bg-gray-200 hover:border-gray-400" onClick={() => {searchResults & searchResults.length > 0 && handleSearch(search), navigate('/search')}  }><svg 
                                  viewBox="0 0 512 512"
                                  fill="currentColor"
                                  height="1.6em"
                                  width="1.6em"
                                  
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  />
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M338.29 338.29L448 448"
                                  />
                                </svg></button>
                     <button className='p-2 px-4 bg-black text-white' onClick={handleCloseAndSearch}>X</button>
                 </div>)
                }


            { menuOpen &&
            <div className="lg:hidden absolute  right-0 top-[84px] bg-white p-4 w-full border-t-2 border-gray-300 text-[20px] ">
             
                <NavLink to="/" onClick={() => toggleMenu(true)} className="block flex justify-between items-center gap-10 active:text-red-500 hover:text-red-600 mb-2">Shop<FaArrowRight size={15} color="black" /></NavLink>
                <NavLink to="/mens" onClick={() => toggleMenu(true)} className="block flex justify-between items-center gap-12  active:text-red-500 hover:text-red-600 mb-2">Men<FaArrowRight size={15} color="black" /></NavLink>
                <NavLink to="/womens" onClick={() => toggleMenu(true)} className="block  flex justify-between items-center gap-5 active:text-red-500 hover:text-red-600 mb-2">Women<FaArrowRight size={15} color="black" /></NavLink>
                <NavLink to="/kids" onClick={() => toggleMenu(true)} className="block flex justify-between items-center gap-12 active:text-red-500 hover:text-red-600 mb-2">Kids<FaArrowRight size={15} color="black" /></NavLink>
                {/* <NavLink to="/login" className="block text-white mb-2">Login</NavLink> */}
                
                
          </div>
            }
          

     
    </nav>
   
  );
};

export default Navbar;
