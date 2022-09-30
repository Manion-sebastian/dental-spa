import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <Link to="/">Go to Home Page</Link>{" | "}
            <Link to="/services">See our Services</Link>{" | "}
            <Link to="/contact">Contact us</Link>
        </nav>
    )
}