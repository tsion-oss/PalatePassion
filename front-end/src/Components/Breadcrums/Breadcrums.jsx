import arrow_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/arrow.png';
import './Breadcrums.css';

const Breadcrums = (props) => {
    const { product } = props;

    return (
        <div className="breadcrum flex items-center gap-[8px] text-gray-700 font-bold capitalize text-[15px]">
              HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product?.category} <img src={arrow_icon} alt="" /> {product?.name}
        </div>
    );
};

export default Breadcrums;
