import arrow_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/breadcrum_arrow.png'
import './Breadcrums.css';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
    const { product } = props;

    return (
        <div className="breadcrum flex justify-start items-center gap-[8px] text-gray-700  sm:text-[12px] sm:max-mx-[500px] text-[8px]">
        <Link to='/' className="hover:text-red-500 active:text-red-500">HOME</Link>
         /
        <Link to='/' className="hover:text-red-500 active:text-red-500">SHOP</Link>
        /
        <Link to={`/${product?.category}s`} className="hover:text-red-500 active:text-red-500">{product?.category}</Link>
        /
        <Link to={`/product/${product?.id}`} className="hover:text-red-500 active:text-red-500">{product?.name}</Link>
    </div>
    );
};

export default Breadcrums;
