import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newsletter w-[75%] h-[70vh] flex flex-col items-center justify-center m-auto pt-[0px] pb-[140px] mt-[300px]  bg">
            <h1 className="text-gray-700 text-[35px] font-bold">Get Exclusive Offers On Your Email</h1>
            <p className="text-gray-500 text-[15px] mt-5 ">Subscribe to our newletter and stay updated</p>
            <div className="flex items-center justify-between bg-white w-[730px] h-[60px] rounded-[60px] border mt-[30px]"   >
                <input className="w-[500px] ml-[30px] border-none outline-none text-gray-400 font-bold text-[14px]" type="email" placeholder="Your Email id" />
                <button className="w-[210px] h-[60px] rounded-[60px] bg-black text-white text-[14px] cursor-pointer">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;