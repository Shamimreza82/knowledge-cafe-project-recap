import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({handleBookmarks}) => {
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
                     handleBookmarks = {handleBookmarks} 
                     ></Bookmark>) 
            }
        </div>
    );
};

export default Bookmarks;