import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
 const {getTotalCartAmount , cartItems, removeFromCart, backendAllProduct, addCartQuantity, getTotalCartItem  } = useContext(ShopContext)

 

    const ProceedToCheckout = () => {
      alert(`Payment due is ${getTotalCartAmount()} `)
    }

    return (
         <div className="">
          <div className="text-center">
            {cartItems && cartItems.length === 0 ? (
                <div className="pb-4 lg:pb-[80px] pb-[50px]">
                  <h1 className="lg:text-4xl md:text-3xl text-2xl">Your Shopping bag is empty</h1>
                </div>
              ) : (
                <div className="pb-8 lg:pb-[80px]">
                  <h1 className="lg:text-4xl md:text-3xl text-2xl">Your Shopping bag</h1>
                </div>
              )}
          </div>
          <div className="cartitems pb-[100px]  lg:flex lg:flex-row lg:justify-center items-start flex-col gap-10 
           2xl:mx-[300px] xl:mx-[170px] lg:mx-[50px]  sm:mx-[100px] mx-[5px]">
           
            {Object.values(cartItems).length === 0 ? (
              
              <div className=" bg-white max-w-[700px] p-8 h-[120px] ">
                <h1 className="text-lg  text-center">Your Shopping bag is empty</h1>
              </div>
            ) : (
              
                <div className="bg-white lg:max-w-[100%] w-[100%]">
                {Object.values(cartItems).reverse().map((item) => (
              <div key={item.id} className="cartitems-format flex  flex-row gap-10 w-full pb-10 px-5 py-5">
                <div>
                  <a href={`/product/${item.id}`}><img src={item.image} alt="" className="carticon-product-icon xl:max-w-[130px] lg:max-w-[120px] md:max-w-[110px] sm:max-w-[100px] max-w-[80px]" /></a>
                </div>
                <div className="flex flex-col w-full justify-between lg:py-3 lg:text-lg md:text-md text-sm">
                  <div className="flex justify-between items-center">
                    <p><a className="hover:text-red-500 active:text-red-500" href={`/product/${item.id}`}>{item.name}</a></p>
                    <FontAwesomeIcon className="cursor-pointer " style={{ color: 'black' }} icon={faTrash} onClick={() => { removeFromCart(item) }} />
                  </div>
                  <div>
                    <p>${item.new_price}</p>
                    <p className="text-gray-300">${item.old_price}</p>
                  </div>
                  <div className="flex items-center justify-between flex-row  w-full">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(event) => {addCartQuantity(item, parseInt(event.target.value))}}
                        className="cartitems-quantity border border-[2px] border-gray-300 bg-white w-[50px]   flex items-center justify-center text-center cursor-pointer"
                      />
                      <div className="flex lg:gap-10 gap-3">
                          <p className="text-rose-500">Total</p>
                          <p>${item.new_price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
             
                  ))}
                </div>
                ) }

                {/* cartTotal */}
                <div className="caritems-down lg:w-[45%]  flex flex-col lg:gap-10 lg:py-0 py-10 ">
                <div className="cartitems-promocode p-5  bg-white text-[13px] flex-1 font-bold">
                    <p className="text-gray-800">If you have a promo code, Enter it here</p>
                    <div className="caritems-promobox flex w-[90%] mt-[15px] pl-[20px] h-[50px] bg-gray-200">
                      <input className="outline-none bg-transparent text-[14px] w-[80%] h-[50px] text-black" type="text" placeholder="promocode " />
                      <button className="w-[40%] h-[50px] text[16px] bg-black text-white cursor-pointer">Submit</button>
                    </div>
                  </div>

                  <div className="lg:pt-5 lg:mt-0 mt-10 caritems-total  w-[100%]  p-5  bg-white flex-1 flex-col mr-[200px] gap-[40px]  ">
                    <h1 className="lg:text-xl text-lg font-bold text-black mb-10">Cart Totals</h1>
                    <div>
                      <div className="caritems-total-item flex justify-between py-[15px] px-[0px]">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                      </div>
                      <hr />
                      <div className="caritems-total-item flex justify-between py-[15px] px-[0px]">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                      </div>
                      <hr />
                      <div className="cartitems-total-item flex justify-between py-[15px] px-[0px]">
                        <h3 className="font-bold text-black text-[16px]">Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                      </div>
                    </div>
                    <button onClick={() => ProceedToCheckout()} className="w-[70%] h-[50px] outline-none bg-red-400 text-white  font-bold cursor-pointer my-[20px] border border-black text-[13px] ">PROCEED TO CHECKOUT</button>
                  </div>


                 
                </div>
           
          
          </div>
      
          </div>    
  );
};

export default CartItems;




