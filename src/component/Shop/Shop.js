import React, { useEffect, useState } from 'react';
import Loader from '../Loader';
import Pagination from '../Pagination';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ countIncrease }) => {
    const [products, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                if (data.products) {
                    setProduct(data.products);
                    setLoader(false);
                }
            })
    }, [])


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = products.slice(firstPostIndex, lastPostIndex);
    return (

        <>
            {
                loader ?
                    <Loader></Loader>
                    :
                    <div className='my-10 grid lg:col-span-10'>
                        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 product-container'>
                            {
                                currentPost?.map(product => <Product
                                    key={product.id}
                                    product={product}
                                    countIncrease={countIncrease}
                                ></Product>)
                            }
                        </div>
                        <Pagination totalPosts={products.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
                    </div>
            }
        </>
    );
};

export default Shop;