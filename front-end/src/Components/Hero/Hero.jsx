
import hand_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /hand_icon.png'
import arrow_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /arrow.png'
import hero_image from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /hero_image.png'

const Hero = () => {
    return (
        <div className="h-100vh bg-gradient-to-b from-rose-200 to-gray-500 via-transparent flex">
           <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] line-height-2">
             <h2 className='text-black text-md font-bold '>NEW ARRIVALS ONLY</h2>
             <div>
                <div className="flex items-center gap-[20px]">
                    <p className='text-black text-7xl font-bold'>new</p>
                    <img  className='w-20' src={hand_icon} alt=''/>
                </div>
                <p className='text-black text-7xl  font-bold'>collections</p>
                <p className='text-black text-7xl  font-bold'>for everyone</p>
             </div>
             <div className='flex justify-center items-center gap-[15px] w-[230px] h-[50px] rounded-3xl mt-[30px] bg-red-500 text-white text-md font-bold cursor-pointer'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''/>
             </div>
           </div> 
           <div className='flex-1'>
               <img src={hero_image} alt="" />
           </div>
        </div>
    );
};

export default Hero;