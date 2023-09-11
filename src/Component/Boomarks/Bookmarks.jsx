import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBookmarks(data))
    },[])

    return (
        <div className='lg:w-[50%]'>
            <h2>Bookmark: {bookmarks.length}</h2>
            {
                bookmarks.map (bookmark => <Bookmark
                     key={bookmark.id} 
                     bookmark={bookmark} 
                     ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;