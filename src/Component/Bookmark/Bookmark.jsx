import React from 'react';

const Bookmark = ({bookmark, handleBookmarks}) => {
    console.log (bookmark)
const {id, title, author,author_img, cover,posted_date, reading_time,hashtags  } = bookmark; 
    return (
        <div className=''>
            <img src={cover} alt="" />    
            <div className='flex justify-between items-center '>
                <div className='flex'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='space-x-4'>
                    <span>{reading_time}</span>
                    <button onClick={() => handleBookmarks(bookmark)}>BM</button>
                </div>
            </div> 
            <p className='text-2xl font-bold my-3'>{title}</p>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-5'>#{hash}</span>)
                }
            </p>
            <button className='text-red-800 font-bold underline mb-8'>Mark as read</button>
        </div>
    );
};

export default Bookmark;