import React from 'react'
import {Link} from 'react-router-dom'
import Search from './search'

var Navbar= () => {
    return(
       <div>
            <nav>
                <div className="nav-wrapper red darken-1">
                    <div className="container row">
                        <Link to='/' className='brand-logo hov'>TOMATO</Link>
                        <a href=" " data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Search/></li>
                            <li className='hov'><Link to="/">Home</Link></li>
                            <li className='hov'><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Search/></li>
                <li className='hov'><Link to="/">Home</Link></li>
                <li className='hov'><Link to="/about">About</Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar;