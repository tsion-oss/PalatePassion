import footer_logo from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /logo_big.png'
import instagram_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /instagram_icon.png'
import pinterest_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /pintester_icon.png'
import whatsapp_icon from '/Users/zion/Documents/Mine/PalatePassion/front-end/src/Components/Assets /whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-[50px]">
            <div className="footer-logo flex items-center gap-[20px]">
                <img src={footer_logo} alt="" />
                <p className='text-gray-700 text-[38px] font-bold'>SHOPPER</p>
            </div>
            <ul className="footer_links flex list-style-none text-gray-600 text-[17px] gap-9 ">
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>

            </ul> 
            <div className="footer-social-icon flex gap-[20px] ">
                <div className="footer-icons-container p-[10px] pb-[6px] bg-white border border-[1px]">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px] bg-white border border-[1px]">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px] bg-white border border-[1px]">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-gray-800 text-[15px] ">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-gray-200' />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;