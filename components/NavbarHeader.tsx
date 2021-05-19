// import {Navbar, Nav} from 'react-bootstrap';
import Link from 'next/link';

const NavbarHeader = () => {
    return (
        <div className="header">
        <Link href="/"><a className="logo">C & C Pressure Washing</a></Link>
        <div className="header-right">
            <Link href="/"><a>Home</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/about"><a>About</a></Link>
        </div>
        </div>
    )
}

export default NavbarHeader;