import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";


const Popular = () => {

    const { backendData } = useContext(ShopContext)
    return (
        <div className="PopularBox flex flex-col items-center gap-3 h-full md:h-screen mt-20 xl:mx-[170px] lg:mx-[120px] md:mx-[30px] sm:mx-[100px] mx-[5px]">
            <h1 className="text-black text-2xl md:text-2xl lg:text-3xl font-bold">POPULAR IN WOMEN</h1>
            <hr className="w-[20%] h-1 rounded-lg bg-black" />
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 justify-center xl:mt-20 lg:mt-20 md:mt-12 mt-8 ">
                {backendData &&
                backendData.map((item, i) =>
            
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              
                )}
                
            </div>
        </div>
    );
};

export default Popular;