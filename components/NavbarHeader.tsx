import {Image, Navbar, Nav} from 'react-bootstrap';
// import Image from 'next/image';
import Link from 'next/link';


const NavbarHeader = () => {

    return (
        // <div className="header">
        // <Link href="/"><a><Image className="logo" src="/images/CC.png" width="75px" height="75px"/></a></Link>
        // <div className="header-right">
        //     <Link href="/"><a>Home</a></Link>
        //     <Link href="/contact"><a>Contact</a></Link>
        //     <Link href="/about"><a>About</a></Link>
        // </div>
        // </div>
        <Navbar style={{backgroundColor:'#2d2d2e', color:'white'}} expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <Image
                        alt=""
                        src="/images/CCWhite.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link style={{color:'white', textAlign:'center'}} href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHeader;