//!No need to change anything in here
import React from 'react'
import {Link} from 'react-router-dom'
//TODO Convert Dashboard & Profile to links

const Header = () => {
  return (
    <nav className="nav-header">
      <h1>SOSMS</h1>
      <div className="nav-links">
        <Link to='/dashboard' >Dashboard</Link>
        <Link to='/profile' >Profile</Link>
      </div>
    </nav>
  )
}

export default Header
