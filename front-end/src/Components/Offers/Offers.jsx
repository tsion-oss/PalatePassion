import exclusive_image from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/exclusive_image.png'
import './Offers.css'
import offers from './offers.png'

const Offers = () => {

    const scrollToNewCollections = () => {
        const newCollection = document.getElementById('newCollections')
        if(newCollection) {
            newCollection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className=" offers flex text-black rounded-xl ">
            <div className="flex-1 flex flex-col justify-center">
               
                <h1 className=' lg:text-[29px] mb-5'>New Arrivals for clothing</h1>
                <p className=' text-[13px]'>Introducing our latest arrivals in clothing! Check out what is new and stay ahead in style.</p>
                <button onClick={scrollToNewCollections} className='lg:w-[200px] lg:h-[50px] rounded-[10px] border border-black text-white bg-red-500 text-lg font-bold mt-[30px] cursor-pointer'>Check Now</button>
            </div>
            <div className="flex-1 flex items-center justify-flex-end pt-[50px]">
                <img className='md:block hidden w-[70%] ml-[190px] max-w-full' src={offers} alt="" />
            </div>
        </div>
    );
};

export default Offers;

