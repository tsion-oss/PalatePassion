

const Item = (props) => {
    return (
        <div className=" hover:scale-105 transition-transform duration-600  ">
            <img className="w-full h-auto" src={props.image} alt={props.name} />
            <p className="mt-3 mb-1 text-[12px] sm:text-[10px] md:text-[12px] lg:text-md ">{props.name}</p>
            <div className="flex gap-2 ">
                <div className="text-gray-500 text-[12px] sm:text-[10px] md:text-[12px] lg:text-md">
                    ${props.new_price}
                </div>
                <div className="text-gray-400 text-[12px] sm:text-[10px] md:text-[12px] lg:text-md font-bold line-through">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};


export default Item;