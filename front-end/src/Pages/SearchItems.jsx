import React, { useEffect } from 'react';
import Item from '../Components/Item/Item';

const SearchItems = ({ searchResults, handleSearch }) => {
 
    console.log(searchResults)
   
   
    return (
        <div className='mt-200px'>
            <div className="shopcategory-products grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 sm:gap-7 gap-2 md:ml-[110px] md:mr-[110px] justify-center mb-[100px] md:mt-[150px] sm:ml-[70px] sm:mr-[70px] ">
            {Array.isArray(searchResults) && searchResults.length > 0 ? (
                    <>
                        {searchResults.map((item) => (
                            <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        ))}
                    </>
                ) : (
                <div className='h-[50vh] flex max-w-[80%] mx-auto text-center'>
                    <h1 className=''>No items found. We couldnt find the item you are looking for.</h1>
                </div>
                
                )}

            
            </div>
        </div>
    );
};

export default SearchItems;