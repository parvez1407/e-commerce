import React from 'react';

const Product = ({ product, handleAddToCart, countIncrease }) => {
    const { title, thumbnail, price, discountPercentage, brand } = product;

    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-300 dark:text-gray-100 relative">
            <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 pb-10">
                    <h2 className="text-2xl font-semibold tracking-wide text-sky-700">{title}</h2>
                    <div className='flex justify-between'>
                        <p className="dark:text-sky-700 font-bold">Price: ${price}</p>
                        <p className="dark:text-blue-500">Discount: {discountPercentage}%</p>
                    </div>
                    <p className='text-sm font-light text-sky-700'>Brand: {brand}</p>
                </div>
                <button onClick={countIncrease} className="w-full p-3 font-semibold tracking-wide rounded-b-md bottom-0 left-0 dark:bg-sky-600 hover:bg-sky-500 text-white absolute">Add to Card</button>
            </div>
        </div>
    );
};

export default Product;