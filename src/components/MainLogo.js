import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/imgs/MainLogo.png'

const MainLogo = () => {
    return (
        <div className="nav-header">
            <Link style={{ textDecoration: 'none', color: '#fff'}} to="/">
            <p style={{color: '#fff'}}><img 
                src={Logo} 
                width="100px" 
                height="74px"
                alt="Logo" 
            /> P.I.R.S
            </p>
            </Link>
        </div>
    )
}

export default MainLogo