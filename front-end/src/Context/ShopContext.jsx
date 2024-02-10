import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios'




export const ShopContext = createContext(null)



const ShopContextProvider = (props) => 
{





  // all product axios call
  const [backendAllProduct, setBackendAllProduct] = useState([])
  const [backendData, setBackendData] = useState()
  const [backendNewCollection, setBackendNewCollection] = useState()
    useEffect(() =>  {
      axios.get('https://passion-palate-api.onrender.com/api/all_product')
           .then(response => {
             setBackendAllProduct(response.data)
           })
           .catch(error => {
             console.error('Error:', error);
           });
          

      axios.get('https://passion-palate-api.onrender.com/api/data')
           .then(response => {
             setBackendData(response.data)
           })
           .catch(error => {
             console.error('Error:', error);
           });
           

        axios.get('https://passion-palate-api.onrender.com/api/new_collection')
           .then(response => {
             setBackendNewCollection(response.data)
           })
           .catch(error => {
             console.error('Error:', error);
           });


     }, []) 


     

     
  
   // Adding to cart
const [cartItems, setCartItems] = useState([])

const addToCart = async (product) => {
  try {
    const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
    const backendCart = response.data;
     setCartItems(backendCart)
    const existingCartItem = backendCart.find((item) => item.id === product.id);

    if (existingCartItem) {
        const response = await axios.put(`https://passion-palate-api.onrender.com/api/cart/${product.id}`, { id: product.id, image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price, quantity: existingCartItem.quantity + 1 });
        setCartItems(response.data)
       
    } else {
      const response = await axios.post('https://passion-palate-api.onrender.com/api/cart', { id: product.id,  image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price,quantity: 1 });
      setCartItems(response.data)
    }
    try{
    const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
    const backendCart = response.data;
    setCartItems(backendCart);
   }catch(error){
    console.error('Error:', error)
   }

  } catch (error) {
    console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
  }
};

useEffect(() => {

const fetchCartItems = async () => {
  try {
    const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
    const backendCart = response.data;
    setCartItems(backendCart);
  } catch (error) {
    console.error('Error fetching cart items:', error.response ? error.response.data : error.message);
  }
};
fetchCartItems();
}, []); 



    
    //removing from cart
    const removeFromCart = async (product) => {
      
      try {
        const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
        const backendCart = response.data;
        setCartItems(backendCart)
        const existingCartItem = backendCart.find((item) => item.id === product.id);
    
        if (existingCartItem.quantity > 1) {
          const response = await axios.put(`https://passion-palate-api.onrender.com/api/cart/${product.id}`, { id: product.id, image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price, quantity: existingCartItem.quantity - 1 });
          setCartItems(response.data)
        } else {
          await axios.delete(`https://passion-palate-api.onrender.com/api/cart/${product._id}`);
        }
    
      
        try{
          const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
          const backendCart = response.data;
          setCartItems(backendCart);
         }catch(error){
          console.error('Error:', error)
         }
    
        
        
      } catch (error) {
        console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
      }
    };


    // Getting Total Cart Amount

    const getTotalCartAmount = () => {
      let total = 0;
      
      for (const itemId in cartItems) {
        const item = cartItems[itemId];
    
        if (item && item.quantity && item.new_price && item.quantity > 0) {
          total += item.new_price * item.quantity;
        }
      }
     
      return total;
    }
   
    // Getting total CartItems
    const getTotalCartItems = () => {
      let totalItem = 0;
    
     for (const itemId in cartItems) {
      const item = cartItems[itemId]
      if(item && item.quantity && item.quantity) {
        totalItem += item.quantity
      }
       
     }
     console.log(totalItem)
     return totalItem
    };
    
  

    


    // Changes on the Cart Input Quantity


    const addCartQuantity = async (product, updatedQuantity) => {
     
      updatedQuantity = Math.max(updatedQuantity, 1);
    
      try {
        await axios.put(`https://passion-palate-api.onrender.com/api/cart/${product.id}`, {
          id: product.id,
          image: product.image,
          name: product.name,
          old_price: product.old_price,
          new_price: product.new_price,
          quantity: updatedQuantity,
        });
    
       
        const response = await axios.get('https://passion-palate-api.onrender.com/api/cart');
        const backendCart = response.data;
        setCartItems(backendCart);
      } catch (error) {
        console.error('Error updating cart quantity:', error.response ? error.response.data : error.message);
      }
    };
    
   // Sort function 
  const [sortBy, setSortBy] = useState('default')

  const updateSortBy = (newSortBy) => {
    setSortBy(newSortBy)
  }

  // Search 

  const [searchQuery, setSearchQuery] = useState('')
  
  const [searchIsOpen, setSearchIsOpen] = useState(false);



  // Alert for AddToCArt

  const alertForCart = (pro) => {
    alert(`${pro.name} is added to shopping cart!`)
  }
  
  // Cart open and close
  const [open, SetOpen] = useState(false)

  const CartSwitch = () => {
     SetOpen(!open)
  }



  



  
  // const toggleSearch = () => {
  //   setSearchIsOpen((prevSearchIsOpen) => !prevSearchIsOpen);
  // };

  
  

    

    const contextValue = { CartSwitch, alertForCart, searchIsOpen, setSearchIsOpen,  searchQuery,  setSearchQuery, sortBy, setSortBy, updateSortBy ,getTotalCartItems,  getTotalCartAmount, cartItems, addToCart, removeFromCart, backendAllProduct, backendData, backendNewCollection, addCartQuantity,  }

    

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;