
import Item from "../Item/Item";

import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import './RelatedProducts.css'

const RelatedProducts = () => {

    const {backendData} = useContext(ShopContext)
    return (
        <div className="relatedproducts flex flex-col items-center gap-3 h-full md:h-screen mt-20 ">
            <h1 className='text-black text-2xl md:text-2xl lg:text-3xl font-bold'>Related Products</h1>
            <hr  className='w-[200px] h-[6px] rounded-xl bg-black'/>
            <div className="relatedproducts-item grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 justify-center xl:mt-20 lg:mt-20 md:mt-12 mt-8">
                {backendData &&
                backendData.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;