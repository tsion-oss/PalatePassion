import React from 'react';
import Item from '../Components/Item/Item';

const SearchItems = ({ searchResults }) => {
    return (
        <div className='pt-200px md:mt-[200px] mt-[150px] xl:mx-[170px] lg:mx-[120px] md:mx-[30px] sm:mx-[30px] mx-[5px]'>
            <div className="shopcategory-products ">
                {Array.isArray(searchResults) ? (
                    searchResults.length > 0 ? (
                        <div className=' grid md:grid-cols-4  grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2  justify-center items-center mb-[100px] md:mt-[150px]'>
                            {searchResults.map((item) => (
                                <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            ))}
                        </div>
                    ) : (
                        <div className='text-center flex justify-center items-center h-[50vh] xl:text-xl md:text-lg text-md'> 
                            No items found. We couldnt find the item you are looking for.
                        </div>
                    )
                ) : (
                    <div className='flex justify-center items-center h-[50vh]'>
                        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchItems;
