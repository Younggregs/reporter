import React, {useState} from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import MainLogo from '../components/MainLogo'
import { ReactComponent as NavLogOut } from '../assets/svg/NavLogOut.svg';
import { ReactComponent as NavDirectory } from '../assets/svg/NavDirectory.svg';
import { ReactComponent as Settings } from '../assets/svg/Settings.svg';
import { ReactComponent as ArrowRight } from '../assets/svg/ArrowRight.svg';

const InnerNavbar = (props) => {

    const [stop, setStop] = useState(true)
    const [superUser, setSuperUser] = useState(false)

    const isSuper = async () => {
        var superUser = await localStorage.getItem('isSuperUser')
        if(superUser === 'true'){ setSuperUser(true) }else{ setSuperUser(false)}
        setStop(false)
    }

    if(stop){
        isSuper()
    } 
    

    return (
        <div className="onepage-navbar-inner">
            <h1 style={{textAlign: 'center'}}>PEF(M)B Incident Reporting System</h1>
            <nav className="navbar container">
                <div className="nav">
                <input type="checkbox" id="nav-check" />
                    <div className="logo-btn">
                        <MainLogo />
                        <div className="mobile-navbar">
                            <div className="list-drop" tabIndex="0">
                                <div style={{ width: 30, height: 30, background: '#fff', borderRadius: 50}}>
                                    <Settings />
                                </div>
                                <div className="popout-drop">
                                    <Link to="/my_analytics"> <NavDirectory className="mr-3" />My Report Analytics<ArrowRight className="icon-right" /> </Link>
                                    <Link to="/edit_password"> <NavDirectory className="mr-3" />Edit Password<ArrowRight className="icon-right" /> </Link>
                                    <Link to="/logout"> <NavLogOut className="mr-3" />Log out<ArrowRight className="icon-right" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="flip-header">
                            <div className="nav-links link-inner">
                                <div className="inner-header">
                                    <ul>
                                        {superUser && (
                                        <li className="col-md-3">
                                            <Link 
                                                className={props.user ? ("active") : ("")} 
                                                to='/user'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Users
                                            </Link>
                                        </li>
                                        )}
                                        <li className={superUser ? ("col-md-3") : ("col-md-12")}>
                                            <Link 
                                                className={props.report ? ("active") : ("")} 
                                                to='/report'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Reports
                                            </Link>
                                        </li>
                                        {superUser && (
                                        <li className="col-md-3">
                                            <Link 
                                                className={props.manager ? ("active") : ("")} 
                                                to='/manager'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Manager
                                            </Link>
                                        </li>
                                        )}
                                        {superUser && (
                                        <li className="col-md-3">
                                            <Link 
                                                className={props.analytics ? ("active") : ("")} 
                                                to='/analytics'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Analytics
                                            </Link>
                                        </li>
                                        )}
                                    </ul>
                                </div>
                                <ul>
                                    <li>
                                        <div className="list-drop" tabIndex="0">
                                            <div style={{ width: 30, height: 30, background: '#fff', borderRadius: 50}}>
                                                <Settings />
                                            </div>
                                            <div className="popout-drop">
                                                <Link to="/my_analytics"> <NavDirectory className="mr-3" />My Report Analytics<ArrowRight className="icon-right" /> </Link>
                                                <Link to="/edit_password"> <NavDirectory className="mr-3" />Edit Password<ArrowRight className="icon-right" /> </Link>
                                                <Link to="/logout"> <NavLogOut className="mr-3" />Log out<ArrowRight className="icon-right" /> </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {/* <CopyLink /> */}
                </div>
            </nav>
        </div>
    )
};

export default InnerNavbar;