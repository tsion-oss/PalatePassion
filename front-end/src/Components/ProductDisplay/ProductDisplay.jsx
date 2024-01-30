import React, { useContext } from 'react';
import star_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/star_icon.png'
import star_dull_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;

   

    const {addToCart} = useContext(ShopContext)

    return (
        <section className='productdisplay flex justify-center mt-10'>
            <div className="productdisplay-left flex  items-center gap-5 mb-[200px]">
                {/* <div className="productdisplay-img-list flex flex-col gap-2">
                    <img className='h-32' src={product.image} alt="" />
                    <img className='h-32' src={product.image} alt="" />
                    <img className='h-32' src={product.image} alt="" />
                    <img className='h-32' src={product.image} alt="" />
                </div> */}
                <div className="productdisplay-img overflow-y-auto ">
                <img className='productdisplay-main-img mb-5 w-[800px] h-500' src={product?.image} alt="" />

                   
                </div>
            </div>
            <div className="productdisplay-right flex flex-col ml-10  ">
                <h1 className='text-gray-700 text-3xl font-bold'>{product?.name}</h1>
                <div className="productdisplay-right-star flex items-center mt-2 gap-1 text-gray-700 text-base">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices flex flex-col font-bold mt-2">
                    <div className='flex gap-3 text-[20px] mb-5'>
                        <div className="productdisplay-right-price-old text-gray-400 line-through">
                            ${product?.old_price}
                        </div>
                        <div className="productdisplay-right-price-new text-red-600">
                            ${product?.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description text-gray-700 mt-2 w-[450px] text-[13px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo vel maiores incidunt minima optio iure maxime blanditiis. Ullam pariatur, vel magnam explicabo dolore minima sed animi quibusdam corporis fugiat.
                    </div>
              
                    <button onClick={() => {addToCart(product)}} className="mt-4 bg-red-500 text-white px-5 py-4 rounded w-[200px] text-[14px] mt-[50px] mb-[50px]">ADD TO CART</button>
                    <p className='productdisplay-right-category mt-4'><span className="font-bold">Category:</span> Women, T-Shirt, Crop Top </p>
                    <p className='productdisplay-right-category'><span className="font-bold">Tags:</span> Modern, Latest </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
