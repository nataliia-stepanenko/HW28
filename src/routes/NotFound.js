import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <p>Ooops, something went wrong...</p>
        <h2>Page not found</h2>
        <Link to="/">Go back to home page</Link>
        </>
    )
}

export default NotFound