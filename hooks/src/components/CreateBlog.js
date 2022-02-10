import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('John');
    const [body , setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ title, author, body});
        const data = { title, author, body };

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then( () => {
            //history.go(-1);
            history.push('/');
        })
    }

    return(
        <div className='create'>
            <h2>Write a new Blog!!!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='John'>John</option>
                    <option value='Jack'>Jack</option>
                    <option value='Jane'>Jane</option>
                </select>
                <label>Write your blog here</label>
                <textarea
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <button>
                        Add Blog
                </button>
            </form>
        </div>
    )
}

export default CreateBlog;