// import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from '../utility/useFetch';

/* HTTP Methods 
   GET    /blogs        to get all the blogs
   GET    /blogs/{id}   to get the blog with {id}
   POST   /blogs        add a blog to the database
   DELETE /blogs/{id}   to delete a blog from db with {id}
    
   1 && 1  = 1
   1 && 0 = 0
*/

const Home = () => {

    const { error, isLoading, data: blogs } = useFetch('http://localhost:3001/blogs');
    
    return(
        <div className="home">
            { error && <div> {error} </div> }
            { isLoading && <div>Loading.....</div>}
            { blogs && <BlogList blogs={blogs} title={blogs.length>0 ? "All the Blogs": 'No blogs found'}></BlogList> }
            {/* <BlogList blogs={blogs.filter( blog => blog.author === 'Yash')} title="Yash's Blog" handleDelete={handleDelete}></BlogList> */}
        </div>
    )
}

export default Home;