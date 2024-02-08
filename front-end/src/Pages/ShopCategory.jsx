import { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext.jsx'
import Item from "../Components/Item/Item.jsx";
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
       
       
        <div className="shop-category mt-[120px]  mt-20 xl:mx-[170px] lg:mx-[120px] md:mx-[30px] sm:mx-[100px] mx-[5px] md:mt-[190px] mt-[170px]">
            
            <div className="shopcategory-indexSort flex flex-col md:flex-row justify-between items-center">
                <p className="mb-2 md:mb-0">
                    <span className="font-bold">Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort flex justify-center items-center border border-[1px] border-solid border-gray-300 md:w-[180px] sm:w-[120px] w-[100px] sm:h-[40px] h-[30px]">
                    {/* <img src={dropdown_icon} alt="" /> */}
                    <SortingDropdown />
                </div>
            </div>




            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 justify-center xl:mt-20 lg:mt-20 md:mt-12 mt-8">
            {sortedProductList &&
                    sortedProductList.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                        } else {
                            return null;
                        }
                    })}
         </div>

     </div>
    );
};

export default ShopCategory;