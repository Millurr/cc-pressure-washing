import React from 'react'
import NavbarHeader from './NavbarHeader'
import Footer from './Footer'

export const Layout = ({children}) => {
    return (
        <div className="backgroundfull">
            <NavbarHeader />
            {children}
            <Footer />
        </div>
    )
}
