import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';



const Product =  () => {




    const {backendAllProduct} = useContext(ShopContext)
    const {productId} = useParams()
    const product = backendAllProduct?.find((e) => e.id === Number(productId));



    return (
        <div className="mt-[150px] xl:mx-[170px] lg:mx-[120px] md:mx-[30px] sm:mx-[100px] mx-[20px]">
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts />
        </div>
    );
};

export default Product;
