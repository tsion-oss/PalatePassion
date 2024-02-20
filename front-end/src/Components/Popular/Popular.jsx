import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const Popular = () => {
    const { backendData } = useContext(ShopContext);

    return (
        <div className="PopularBox flex flex-col items-center gap-3  xl:mx-[170px] lg:mx-[120px]  sm:mx-[30px]  mx-[5px] md:mt-10 mt-20 md:mb-[100px] ">
            <h1 className="text-black text-2xl md:text-2xl lg:text-3xl font-bold">POPULAR IN WOMEN</h1>
            <hr className="w-[20%] h-1 rounded-lg bg-black" />
            {backendData ? (
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 justify-center xl:mt-20 lg:mt-20 md:mt-12 mt-8 ">
                

                    {backendData.map((item, i) => (
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
           
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

export default Popular;
