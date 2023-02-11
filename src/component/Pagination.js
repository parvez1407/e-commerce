import React from 'react';
import './Pagination.css'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='my-8 button-container'>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'px-4 py-2 font-bold text-white rounded-sm bg-sky-700 mr-5' : 'px-4 py-2 font-bold text-white rounded-sm bg-sky-500 hover:bg-sky-700 mr-5'}>{page}</button>
                })
            }
        </div>
    );
};

export default Pagination;