import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/cart_cross_icon.png'
import './CartItems.css'
import { Link } from "react-router-dom";

const CartItems = () => {
 const {getTotalCartAmount , cartItems, removeFromCart, backendAllProduct, addCartQuantity,  } = useContext(ShopContext)

console.log(cartItems)

 

    return (
        <div className="cartitems my-[100px] mx-[170px]">
               {Object.values(cartItems).length === 0 ? (
      <div >
        <h1 className="text-[30px]">Your Shopping bag is empty</h1>
      </div>
    ) : (
      <div className="cartitems-format-main grid items-center gap-[75px] py-[20px] px-[0px] text-gray-800 text-[15px] font-bold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
    )}
    <hr />

    {Object.values(cartItems).reverse().map((e) => (
      <div key={e.id} className="cartitems-format grid items-center gap-[85px] py-[20px] px-[0px] text-gray-500 text-[13px] font-bold pl-3">
        <Link to={`/product/${e.id}`}><img src={e.image} alt="" className="carticon-product-icon" /></Link>
        <Link className="hover:text-red-500 active:text-red-500" to={`/product/${e.id}`}><p >{e.name}</p></Link>
        <p>${e.new_price}</p>

        <input
          type="number"
          value={e.quantity}
          onChange={(event) => addCartQuantity(e, parseInt(event.target.value))}
          className="cartitems-quantity border border-[2px] border-gray-300 bg-white w-[60px] h-[46px] flex items-center justify-center text-center cursor-pointer"
        />

        <p>${e.new_price * e.quantity}</p>
        <img className="cursor-pointer" src={remove_icon} onClick={() => { removeFromCart(e) }} alt="" />
        <hr className="h-[3px] bg-gray-200 border-0 " />
      </div>
    ))}
            
            <div className="caritems-down flex my-[100px] mx-[0px] ">
                <div className="caritems-total flex-1 flex-col mr-[200px] gap-[40px] text-[14px] ">
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
                    <button className="w-[220px] h-[50px] outline-none bg-red-400 text-white text-[14px] font-bold cursor-pointer my-[20px] border border-black">PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode text-[13px] flex-1 font-bold">
                    <p className="text-gray-800">If you have a promo code, Enter it here</p>
                    <div className="caritems-promobox flex w-[504px] mt-[15px] pl-[20px] h-[50px] bg-gray-200">
                        <input className="outline-none bg-transparent text-[14px] w-[330px] h-[50px] text-black" type="text" placeholder="promocode " />
                        <button className="w-[170px] h-[50px] text[16px] bg-black text-white cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;




