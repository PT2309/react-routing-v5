import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    // template = "<p>" + textCollected + "</p>"
    // ES6: `<p>${textCollected}</p>` -- Template string

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => {
                let {id, title, author} = blog;
               return(
                    <div className='blog-view' key={id}>
                        <Link to={`/blogs/${id}`}>
                            <h2>{title}</h2>
                            <h3>Written by: {author}</h3>
                            <p>Read More..........</p>  
                        </Link>              
                    </div>
               )
           })}
        </div>
    )
}

export default BlogList;