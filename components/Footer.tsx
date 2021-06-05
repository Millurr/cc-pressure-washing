import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <p><b>Email: </b>CandCPressureWashing@CCP.com </p> 
            <p><b>Phone: </b>228-216-6215</p>
            <a href="https://www.facebook.com/CCPressureWashers/" target="_blank"><FaFacebook style={{color:'#4677ef'}}/></a>
        </footer>
    )
}

export default Footer;