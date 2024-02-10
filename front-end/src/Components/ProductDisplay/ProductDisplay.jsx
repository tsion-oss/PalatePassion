import React, { useContext } from 'react';
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDisplay = (props) => {
    const { product } = props;

   
    const ADD = async (item) => {
      
      await addToCart(item)
      await getTotalCartItems(item)
      await alertForCart(item)
      
    }

    const {addToCart, getTotalCartItems, alertForCart} = useContext(ShopContext)

    return (
        <section className='productdisplay md:flex md:flex-row flex-col md:justify-center md:items-start mt-10 items-center justify-center  '>
            <div className="productdisplay-left md:flex  md:items-center flex justify-center  gap-5 lg:mb-[200px]">
                <div className="productdisplay-img overflow-y-auto cursor-pointer">
               
                <Link className='relative' to={`/product/${product?.id}`}><img onClick={window.scrollTo(0,0)} className='productdisplay-main-img mb-5 xl:max-w-[800px] xl:max-h-[800px] sm:max-w-[600px] sm:max-h-[600px]' src={product?.image} alt=""/>
                <FontAwesomeIcon icon={faHeart} className='heart-icon' style={{ position: 'absolute', bottom: '7px', right: '7px' }}  />
                </Link> 
                </div>
            </div>
            <div className="productdisplay-right md:flex flex-col flex  justify-start items-start md:ml-10 gap-10 ">
                <div>
                    <Link className='' to={`/product/${product?.id}`}><h1 onClick={window.scrollTo(0,0)}  className='text-gray-700 lg:text-3xl md:text-[25px] sm:text-[30px] text-[21px] font-bold active:text-red-500 hover:text-red-500'>{product?.name}</h1></Link>
                    <div className="productdisplay-right-star flex items-center mt-2 gap-1 text-gray-700 text-base">
                        
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                </div>
                <div className="productdisplay-right-prices flex flex-col font-bold mt-2 gap-6">
                    <div className='flex gap-3 text-[20px] mb-5'>
                        <div className="productdisplay-right-price-old text-gray-400 line-through">
                            ${product?.old_price}
                        </div>
                        <div className="productdisplay-right-price-new text-red-600">
                            ${product?.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description text-gray-700 mt-2 max-w-[450px] text-[13px] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo vel maiores incidunt minima optio iure maxime blanditiis. Ullam pariatur, vel magnam explicabo dolore minima sed animi quibusdam corporis fugiat.
                    </div>
              
                    <button onClick={() => ADD(product)} className="mt-4 bg-red-500 text-white  py-4 rounded w-[100%] text-[14px] mt-[50px] mb-[50px]">ADD TO CART</button>
                    <p className='productdisplay-right-category mt-4'><span className="font-bold text-rose-500">Category:</span> Women, T-Shirt, Crop Top </p>
                    <p className='productdisplay-right-category'><span className="font-bold text-rose-500">Tags:</span> Modern, Latest </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
