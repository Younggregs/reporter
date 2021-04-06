import React from 'react'
import '../styles/Navbar.css'
import MainLogo from '../components/MainLogo'
import { Link } from 'react-router-dom'
import { ReactComponent as Settings } from '../assets/svg/Settings.svg';
import { ReactComponent as ArrowRight } from '../assets/svg/ArrowRight.svg';
import { ReactComponent as NavLogOut } from '../assets/svg/NavLogOut.svg';
import { ReactComponent as NavDirectory } from '../assets/svg/NavDirectory.svg';

const DashboardNavbar = (props) => {
    return (
        <div className="onepage-navbar-inner">
            <h1 style={{textAlign: 'center'}}>PEF(M)B Incident Reporting System</h1>
            <nav className="navbar container">
                <div className="nav">
                <input type="checkbox" id="nav-check" />
                    <div className="dash-inner w-100 in-mobile">
                        <div class="logo-btn d-flex justify-content-between align-items-center w-100">
                            <MainLogo />
                            <span style={{color:' #fff'}} className="dash-title">{props.title}</span>
                            <div className="listing d-flex align-items-center">
                                <div className="list-drop" tabIndex="0">
                                    <div style={{ width: 30, height: 30, background: '#fff', borderRadius: 50}}>
                                        <Settings />
                                    </div>
                                    <div className="popout-drop" style={{color: '#000'}}>
                                        <Link to="/my_analytics"> <NavDirectory className="mr-3" />My Report Analytics<ArrowRight className="icon-right" /> </Link>
                                        <Link to="/edit_password"> <NavDirectory className="mr-3" />Edit Password<ArrowRight className="icon-right" /> </Link>
                                        <Link to="/logout"> <NavLogOut className="mr-3" />Log out<ArrowRight className="icon-right" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default DashboardNavbar;