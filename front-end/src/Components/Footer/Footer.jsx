import footer_logo from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/logo_big.png'
import instagram_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/instagram_icon.png'
import pinterest_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/instagram_icon.png'
import whatsapp_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets/instagram_icon.png'
import logo from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Navbar/logo.png'
import { FaInstagram, FaPinterest, FaWhatsapp  } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-[50px] bg-gray-100 xl:mt-[200px]  md:mt-[150px] mt-[100px] ">
            <div className="footer-logo flex items-center gap-[20px] mt-5">
                <img className='w-[90px]' src={logo} alt="" />
                
            </div>
            <div className="footer-social-icon flex gap-[20px] cursor-pointer ">
                <div className="footer-icons-container p-[10px] pb-[6px]">
                  <FaInstagram className='' />
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px] ">
                  <FaPinterest/>
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px]">
                   <FaWhatsapp/>
                </div>
            </div>
            <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-2  text-[13px] ">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-gray-200' />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;