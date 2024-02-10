
import Item from '../Item/Item';


import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';


const NewCollections = () => {

    const { backendNewCollection } = useContext(ShopContext)
    return (
        <div id='newCollections' className=" NewCollectionBox flex flex-col items-center gap-3   xl:mx-[170px] lg:mx-[120px] md:mx-[30px] sm:mx-[100px] mx-[5px] md:mt-10 mt-20 ">
            <h1 className='text-black text-2xl md:text-2xl lg:text-3xl font-bold'>NEW COLLECTIONS</h1>
            <hr className="md:w-[20%] w-[40%] h-1 rounded-lg bg-black" />
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-8 sm:gap-7 gap-3 justify-center mt-10 \">
                {backendNewCollection &&
                backendNewCollection.map((item, i) =>
                {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
};

export default NewCollections;