import exclusive_image from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
    return (
        <div className=" offers">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className='text-black lg:text-[50px] font-bold'>Exclusive</h1>
                <h1 className='text-black lg:text-[50px] font-bold'>Offers For You</h1>
                <p className='text-black lg:text-[22px] font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='lg:w-[230px] lg:h-[60px] rounded-[60px] border border-black bg-red-500 text-white text-lg font-bold mt-[30px] cursor-pointer'>Check Now</button>
            </div>
            <div className="flex-1 flex items-center justify-flex-end pt-[50px]">
                <img className='lg:block hidden w-[70%] ml-[190px]' src={exclusive_image} alt="" />
            </div>
        </div>
    );
};

export default Offers;

