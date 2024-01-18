

const Item = (props) => {
    return (
        <div className="lg:w-1/5 sm:w-1/4 w-1/2  lg:p-2 md:p-1.5 sm:p-1 hover:scale-105 transition-transform duration-600 sm:pb-0 p-1 pb-3">
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