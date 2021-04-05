import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
// import Logo from '../assets/imgs/MainLogo.png'

const MainLogo = () => {
    return (
        <div className="nav-header">
            <Link style={{ textDecoration: 'none', color: '#000'}} to="/">
                <h1>Reporting</h1>
            </Link>
        </div>
    )
}

export default MainLogo