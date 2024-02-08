import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";

import NewCollections from "../Components/NewCollections/NewCollections";



const Shop = () => {
    return (
        <div className="pt-[90px]">
            <Hero/>
            <Popular />
            {/* <Offers/> */}
            <NewCollections/>
        </div>
    );
};

export default Shop;