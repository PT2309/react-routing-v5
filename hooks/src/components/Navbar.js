import { Link } from 'react-router-dom';

const Navbar = () => {   
    return(
        <nav className="navbar">
            <h1>Blog Mania</h1>
            <div className='links'>
                {/* Link Tags as Anchor tag in routing */}
                <Link to='/'>Home</Link>
                <Link to='/create' 
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(182, 112, 248)',
                        borderRadius: '8px'
                    }}>Create Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;