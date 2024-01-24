import data_product from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /data.js'
import Item from "../Item/Item";

const RelatedProducts = () => {
    return (
        <div className="relatedproducts flex flex-col items-center gap-5 h-[90vh] ">
            <h1 className='text-black text-[50px] font-bold '>Related Products</h1>
            <hr  className='w-[200px] h-[6px] rounded-xl bg-black'/>
            <div className="relatedproducts-item mt-[50px] flex gap-[30px]">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;