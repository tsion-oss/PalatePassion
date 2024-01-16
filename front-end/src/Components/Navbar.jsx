

const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-around p-4 shadow'>
        <div className="flex items-center gap-4">
            <img/>
            <p className="text-black text-3xl">Shop name</p>
        </div>
        <div>
         <ul className='flex items-center gap-6 text-gray'>
           <li>Shop</li>
           <li>Men</li>
           <li>Women</li>
           <li>Kids</li>

         </ul>
        </div>
        <div>
          <button>Login</button>
          <img/>
        </div>
     </div>
   
    );
};

export default Navbar;