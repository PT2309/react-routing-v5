import { useParams } from "react-router";
import useFetch from "../utility/useFetch";

const BlogDetails = () => {
    let { id } = useParams();
    let { data, isLoading, error } = useFetch(`http://localhost:3001/blogs/${id}`);
    return(
        <div className='blog-details'>
            { isLoading && <div>Loading data .....</div>}
            { error && <div> {error} </div>}
            { data && <article>
                <h2>{data.title}</h2>
                <p>Written By: {data.author}</p>
                <div>{data.body}</div>
            </article> }
        </div>
    )
}

export default BlogDetails;