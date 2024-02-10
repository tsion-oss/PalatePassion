import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/cart_cross_icon.png'
import './CartItems.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
 const {getTotalCartAmount , cartItems, removeFromCart, backendAllProduct, addCartQuantity,  } = useContext(ShopContext)

console.log(cartItems)

    const ProceedToCheckout = () => {
      alert(`Payment due is ${getTotalCartAmount()} `)
    }

    return (
         <div className="">
          <div className="text-center">
            {cartItems && cartItems.length === 0 ? (
                <div className="pb-4">
                  <h1 className="text-[3rem]">Your Shopping bag is empty</h1>
                </div>
              ) : (
                <div className="pb-4">
                  <h1 className="text-[3rem]">Your Shopping bag</h1>
                </div>
              )}
          </div>
          <div className="cartitems pb-[100px]  lg:flex lg:flex-row lg:justify-center items-start flex-col gap-10 
           2xl:mx-[300px] xl:mx-[170px] lg:mx-[120px]  sm:mx-[30px] mx-[5px]">
           
            {Object.values(cartItems).length === 0 ? (
              
              <div className=" bg-white max-w-[700px] p-8 h-[120px]">
                <h1 className="text-[30px]">Your Shopping bag is empty</h1>
              </div>
            ) : (
              
                <div className="bg-white lg:max-w-[100%] w-[100%]">
                {Object.values(cartItems).reverse().map((item) => (
    <div key={item.id} className="cartitems-format flex flex-col lg:flex-row gap-10 w-full pb-10">
      <div>
        <img src={item.image} alt="" className="carticon-product-icon xl:max-w-[150px] lg:max-w-[200px] md:max-w-[130px] sm:max-w-[110px] max-w-[80px]" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <p><a className="hover:text-red-500 active:text-red-500" href={`/product/${item.id}`}>{item.name}</a></p>
          <FontAwesomeIcon className="cursor-pointer" style={{ color: 'black' }} icon={faTrash} onClick={() => { removeFromCart(item) }} />
        </div>
        <div className="flex items-center justify-between lg:flex-row flex-col w-full">
          <div className="flex items-center">
            <p>${item.new_price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(event) => addCartQuantity(item, parseInt(event.target.value))}
              className="cartitems-quantity border border-[2px] border-gray-300 bg-white w-[50%] lg:w-[auto] flex items-center justify-center text-center cursor-pointer"
            />
            <p>${item.new_price * item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
                  ))}
                </div>
                ) }

                {/* cartTotal */}
                <div className="caritems-down lg:w-[45%]  flex flex-col gap-10 ">
                  <div className="caritems-total  w-[100%]  p-5  bg-white flex-1 flex-col mr-[200px] gap-[40px] text-[14px] ">
                    <h1 className="text-[23px] font-bold text-black mb-10">Cart Totals</h1>
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
                    <button onClick={() => ProceedToCheckout()} className="w-[50%] h-[50px] outline-none bg-red-400 text-white text-[14px] font-bold cursor-pointer my-[20px] border border-black">PROCEED TO CHECKOUT</button>
                  </div>


                  <div className="cartitems-promocode p-5  bg-white text-[13px] flex-1 font-bold">
                    <p className="text-gray-800">If you have a promo code, Enter it here</p>
                    <div className="caritems-promobox flex w-[90%] mt-[15px] pl-[20px] h-[50px] bg-gray-200">
                      <input className="outline-none bg-transparent text-[14px] w-[80%] h-[50px] text-black" type="text" placeholder="promocode " />
                      <button className="w-[20%] h-[50px] text[16px] bg-black text-white cursor-pointer">Submit</button>
                    </div>
                  </div>
                </div>
           
          
          </div>
      
          </div>    
  );
};

export default CartItems;




