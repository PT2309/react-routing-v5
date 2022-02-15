import { useHistory, useParams } from "react-router";
import useFetch from "../utility/useFetch";

const BlogDetails = () => {
    let { id } = useParams();
    let { data, isLoading, error } = useFetch(`http://localhost:3001/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:3001/blogs/${id}`, {
            method: 'DELETE'
        }).then( () => {
            history.push('/')
        });
    }

    return(
        <div className='blog-details'>
            { isLoading && <div>Loading data .....</div>}
            { error && <div> {error} </div>}
            { data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written By: {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete it!!</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;