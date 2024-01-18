
import hand_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /hand_icon.png'
import arrow_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /arrow.png'
import hero_image from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /hero_image.png'

const Hero = () => {
    return (
        <div className="md:h-100vh lg:pt-0 lg:pb-0 pt-20 pb-20 bg-gradient-to-b from-rose-200 to-gray-500 via-transparent flex">
           <div className="flex-1 flex flex-col justify-center gap-[20px] lg:pl-[110px] md:pl-[80px] line-height-2 sm:pl-20 pl-10">
             <h2 className='text-black lg:text-md md:text-sm text-[12px] font-bold '>NEW ARRIVALS ONLY</h2>
             <div>
                <div className="flex items-center gap-[20px]">
                    <p className='text-black lg:text-6xl  md:text-5xl text-4xl font-bold'>new</p>
                    <img  className='lg:w-20 w-10 ' src={hand_icon} alt=''/>
                </div>
                <p className='text-black lg:text-6xl  md:text-5xl text-4xl   font-bold md:mt-0 mt-3'>collections</p>
                <p className='text-black lg:text-6xl lg:mt-2 md:mt-3 mt-3 md:text-5xl text-4xl  font-bold whitespace-nowrap'>for everyone</p>
             </div>
             <div className='flex justify-center items-center gap-[15px] sm:w-[230px] sm:h-[50px] w-[150px] h-[35px]  rounded-3xl mt-[30px] bg-red-500 text-white md:text-[15px] text-[12px] font-bold cursor-pointer'>
                <div>Latest Collection</div>
                <img className=' md:w-5 w-3 ' src={arrow_icon} alt=''/>
             </div>
           </div> 
           <div className='flex-1'>
               <img className='md:block hidden lg:max-w-[100] md:max-w-[50]' src={hero_image} alt="" />
           </div>
        </div>
    );
};

export default Hero;