import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Item.css'

const Item = (props) => {
    return (
        <div className=" hover:scale-105 transition-transform duration-600  ">
            <>
            
            <Link to={`/product/${props.id}`} className="relative">
                <img onClick={window.scrollTo(0,0)} className="w-full h-auto" src={props.image} alt={props.name} />
                {/* <FontAwesomeIcon icon={faHeart} className='heart-icon' style={{ position: 'absolute', bottom: '7px', right: '7px' }}  /> */}
            </Link>

            </>
            <Link to={`/product/${props.id}`} className="active:text-red-500 hover:text-red-500"><p className="mt-3 mb-1 text-[12px] sm:text-[10px] md:text-[12px] lg:text-md ">{props.name}</p></Link>
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