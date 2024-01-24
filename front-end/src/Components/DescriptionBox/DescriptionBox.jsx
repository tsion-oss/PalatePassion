import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox ">
            <div className="descriptionbox-navigator flex  ">
                <div className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-bold w-[171px] h-[70px] border border-[1px] border-gray-400">Description</div>
                <div className="descriptionbox-nav-box fade flex items-center justify-center text-[16px] font-bold w-[171px] h-[70px]border border-[1px] border-gray-400">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description text-[14px] flex flex-col gap-[25px] border border-gray-300 p-[48px] pb-[70px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut nulla consectetur accusamus voluptatum! Doloremque voluptate optio velit assumenda temporibus consequuntur nostrum molestias, consectetur ut hic! Nemo numquam dignissimos eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit voluptate beatae, itaque quia totam voluptas ipsa saepe. Velit non voluptates voluptas odit. Voluptate, modi neque saepe incidunt rerum id.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;