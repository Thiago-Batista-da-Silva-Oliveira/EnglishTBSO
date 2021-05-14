import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="navbar">
           <div className="navbar-container">
           <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            TBSO
            <i class="fas fa-book-reader"></i>
            </Link>
           <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Lessons'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Lessons
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Dictionaries'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dictionaries
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Questions'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Questions?
              </Link>
            </li>

            
          </ul>
           </div>
        </div>
    )
}

export default Navbar
