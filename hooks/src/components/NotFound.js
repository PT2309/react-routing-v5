import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <div className='not-found'>
            <h2>OOPS!!!!</h2>
            <p>Page not found.....</p>
            <Link to='/'>Check out our blogs!</Link>
        </div>
    )
}

export default NotFound;