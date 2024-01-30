import { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext.jsx'
import dropdown_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item.jsx";
import axios from "axios";
import './CSS/ShopCategory.css'
import SortingDropdown from "../Components/SortingDropdown.jsx/SortingDropdown.jsx";

const ShopCategory = (props) => {
    const { backendAllProduct, sortBy, setSortBy } = useContext(ShopContext)
    const [sortedProductList, setSortedProductList] = useState([])
   
   
    
        useEffect(() => {
            sortProducts();
        }, [backendAllProduct, sortBy]);

    const sortProducts = () => {
        let sortedProducts = [...backendAllProduct];

        if (sortBy === 'priceAsc') {
            sortedProducts.sort((a, b) => a.new_price - b.new_price);
        } else if (sortBy === 'priceDesc') {
            sortedProducts.sort((a, b) => b.new_price - a.new_price);
        }

        setSortedProductList(sortedProducts);
    };

    return (
       
       
        <div className="shop-category ">
            <img className="shopcategory-banner cursor-pointer" src={props.banner} alt="" />
            <div className="shopcategory-indexSort flex justify-between items-center">
                <p>
                    <span className="font-bold">Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort rounded-[40px] border border-[1px] border-solid border-gray-300">
                    {/* <img src={dropdown_icon} alt="" /> */}
                     <SortingDropdown />

                </div>
            </div>
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 md:ml-[110px] md:mr-[110px] justify-center mt-20 mb-[100px] md:mt-10 sm:ml-[70px] sm:mr-[70px]">
            {sortedProductList &&
                    sortedProductList.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                        } else {
                            return null;
                        }
                    })}
</div>

            <div className="shopcategory-loadmore flex justify-center items-center w-[233px] h-[69px] rounded-[75px] text-[18px] font-bold cursor-pointer">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;