import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import axios from 'axios';


const Product =  () => {




    const {backendAllProduct} = useContext(ShopContext)
    const {productId} = useParams()
    const product = backendAllProduct?.find((e) => e.id === Number(productId));



    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts />
        </div>
    );
};

export default Product;
