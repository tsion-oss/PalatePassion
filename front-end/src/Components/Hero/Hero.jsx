
import arrow_icon from './arrow.png'
import hero_image from './hero_image.png'
import { useNavigate } from 'react-router-dom';
import './Hero.css'

const Hero = () => {

    const navigate = useNavigate()
  
    
      
      const navigateToRandomCategory = () => {
        navigate('/womens')
      };


    return (
        <div className="md:h-100vh lg:pt-0 pt-5 
                        lg:pb-0  md:pb-17 sm:pb-10
                        bg-gray-100 
                        xl:px-[120px] lg:px-[80px] md:px-[30px] sm:px-[20px] sm:flex sm:flex-row flex-column ">
           <div className="sm:flex-1 sm:flex flex flex-col sm:items-start  justify-center items-center
                          sm:mt-0 mt-5
                          lg:gap-[20px] gap-[10px] 
                          line-height-2 sm:pl-10 ">
                <div className='heroTextBox sm:items-start sm:justify-start flex flex-col justify-center items-center
                                sm:max-w-auto max-w-[450px]
                                sm:mt-0 sm:mt-[50px] mt-[5px]'>
                    <div className='heroBigText text-black 
                                    xl:text-[42px] lg:text-4xl md:text-3xl sm:text-[29px] text-[1.9rem]
                                    mb-5
                                    lg:mt-2  mt-3  font-extrabold '>
                            <div className="flex items-center md:mb-2 sm:mb-0 ">
                                <p className='text-black  '>Collection and style</p>
                                
                            </div>
                            <div className='flex items-center'>
                                <p className=' whitespace-nowrap'>for everyone</p>
                            </div>
                        </div>
                        <div className='HeroSmallText w-[80%] 
                                        xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]
                                        xl:max-w-auto lg:max-w-[76%] md:max-w-[74%] sm:max-w-[80%]'>
                            <p>Welcome to our collection! Whether you are looking for clothing or accessories, we have got something for you.</p>
                        </div>
                </div>
                <div onClick={navigateToRandomCategory} className=' HeroButton
                md:flex  flex justify-center items-center md:gap-[15px] gap-2 bg-red-600
                xl-w-[200px] lg:w-[180px] md:w-[200px] sm:w-[200px] w-[80%] 
                lg:h-[50px]  md:h-[40px]  h-[35px]  
                md:rounded-2xl rounded-lg mt-[30px]  text-white 
                md:text-[14px] text-[12px] font-bold cursor-pointer '>
                        <p>Buy now</p>
                        <img className='  lg:w-5 md:w-4 w-3 ' src={arrow_icon} alt=''/>
                </div>
           </div> 
           <div className='ImageBox flex-1 flex justify-center '>
                <img className='heroImage lg:max-w-[100] md:max-w-[50] sm:max-w-[20] max-w-[20] sm:w-auto w-[80%]' src={hero_image} alt="" />
           </div>
        </div>
    );
};

export default Hero;