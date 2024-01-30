import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios'




export const ShopContext = createContext(null)



const ShopContextProvider = (props) => 
{
  // all product axios call
  const [backendAllProduct, setBackendAllProduct] = useState()
  const [backendData, setBackendData] = useState()
  const [backendNewCollection, setBackendNewCollection] = useState()
    useEffect(() =>  {
      axios.get('http://localhost:3001/api/all_product')
           .then(response => {
             setBackendAllProduct(response.data)
           })
           .catch(error => {
             console.error('Error:', error);
           });
          

      axios.get('http://localhost:3001/api/data')
           .then(response => {
             setBackendData(response.data)
           })
           .catch(error => {
             console.error('Error:', error);
           });
           

        axios.get('http://localhost:3001/api/new_collection')
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
    const response = await axios.get('http://localhost:3001/api/cart');
    const backendCart = response.data;
   
    const existingCartItem = backendCart.find((item) => item.id === product.id);

    if (existingCartItem) {
      await axios.put(`http://localhost:3001/api/cart/${product.id}`, { id: product.id, image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price, quantity: existingCartItem.quantity + 1 });
    } else {
      await axios.post('http://localhost:3001/api/cart', { id: product.id,  image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price,quantity: 1 });
    }
    try{
    const response = await axios.get('http://localhost:3001/api/cart');
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
    const response = await axios.get('http://localhost:3001/api/cart');
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
        const response = await axios.get('http://localhost:3001/api/cart');
        const backendCart = response.data;
        setCartItems(backendCart)
        const existingCartItem = backendCart.find((item) => item.id === product.id);
    
        if (existingCartItem.quantity > 1) {
          await axios.put(`http://localhost:3001/api/cart/${product.id}`, { id: product.id, image: product.image, name: product.name, old_price: product.old_price, new_price: product.new_price, quantity: existingCartItem.quantity - 1 });
        } else {
          await axios.delete(`http://localhost:3001/api/cart/${product._id}`);
        }
    
      
        try{
          const response = await axios.get('http://localhost:3001/api/cart');
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
    };
    
 
    // Getting total CartItems


    const getTotalCartItems = () => {
      let totalItem = 0;
    
      Object.values(cartItems).forEach(item => {
  
        if (item.quantity > 0) {
          totalItem += item.quantity;
        }
      });
    
      return totalItem;
    };


    const addCartQuantity = async (product, updatedQuantity) => {
      // Ensure the updated quantity is not less than 1
      updatedQuantity = Math.max(updatedQuantity, 1);
    
      try {
        await axios.put(`http://localhost:3001/api/cart/${product.id}`, {
          id: product.id,
          image: product.image,
          name: product.name,
          old_price: product.old_price,
          new_price: product.new_price,
          quantity: updatedQuantity,
        });
    
        // Fetch the updated cart items after updating quantity
        const response = await axios.get('http://localhost:3001/api/cart');
        const backendCart = response.data;
        setCartItems(backendCart);
      } catch (error) {
        console.error('Error updating cart quantity:', error.response ? error.response.data : error.message);
      }
    };
    
    
 


   

    

    const contextValue = { getTotalCartItems, getTotalCartAmount, cartItems, addToCart, removeFromCart, backendAllProduct, backendData, backendNewCollection, addCartQuantity,  }

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;