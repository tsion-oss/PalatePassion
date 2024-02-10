import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const RelatedProducts = () => {
    const { backendData } = useContext(ShopContext);

    return (
        <div className="relatedproducts flex flex-col items-center justify-center gap-3 h-full md:h-screen mt-20 ">
            <h1 className='text-black text-2xl md:text-2xl lg:text-3xl font-bold'>Related Products</h1>
            <hr className='w-[200px] h-[6px] rounded-xl bg-black'/>

            {backendData ? (
                <div className="relatedproducts-item grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 justify-center xl:mt-20 lg:mt-20 md:mt-12 mt-8">
                    {backendData.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            ) : (
                <div className="flex justify-center items-center h-[20vh]">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-500 border-r-transparent">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RelatedProducts;
