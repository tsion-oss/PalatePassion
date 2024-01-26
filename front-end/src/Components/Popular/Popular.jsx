import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const Popular = () => {

    const { backendData } = useContext(ShopContext)
    return (
        <div className="flex flex-col items-center gap-3 h-full md:h-screen mt-8">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">POPULAR IN WOMEN</h1>
            <hr className="w-20 md:w-40 h-1 md:h-1.5 rounded-lg bg-black" />
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2  md:ml-[110px] md:mr-[110px]  justify-center mt-20 mb-[100px] md:mt-10 sm:ml-[70px] sm:mr-[70px]">
                {backendData &&
                backendData.map((item, i) =>
            
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              
                )}
                
            </div>
        </div>
    );
};

export default Popular;