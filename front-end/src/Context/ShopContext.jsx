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
     
    // default cart
    // const getDefaultCart = () => {
    //   let cart = {};
    //   if (backendAllProduct && backendAllProduct.length) {
    //     for (let index = 0; index < backendAllProduct.length; index++) {
    //       cart[index] = { id: backendAllProduct[index].id, quantity: 0 };
    //     }
    //   }
    //   return cart;
    // };
    

    // console.log(defaultCart);
  

  

    const [cartItems, setCartItems] = useState([])
 
   

   
// adding to cart
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


// console.log(cartItems)



    
    
    
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
    

    const getTotalCartItems = () => {
      let totalItem = 0;
    
      Object.values(cartItems).forEach(item => {
        // Check if the quantity is greater than 0
        if (item.quantity > 0) {
          // Add the quantity of each item to the totalItem
          totalItem += item.quantity;
        }
      });
    
      return totalItem;
    };


   

    

    const contextValue = { getTotalCartItems, getTotalCartAmount, cartItems, addToCart, removeFromCart, backendAllProduct, backendData, backendNewCollection }

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;