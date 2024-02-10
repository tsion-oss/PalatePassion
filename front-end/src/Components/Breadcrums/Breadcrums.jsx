
import './Breadcrums.css';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
    const { product } = props;

    return (
        <div className="breadcrum flex justify-center gap-[8px] text-gray-700 md:text-[12px]  sm:text-[11px] text-[9px] ">
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
