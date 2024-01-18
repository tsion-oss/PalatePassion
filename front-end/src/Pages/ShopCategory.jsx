import { useContext } from "react";
import { ShopContext } from '../Context/ShopContext.jsx'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)

    return (
       
       
        <div className="shop-category">
          
        </div>
    );
};

export default ShopCategory;