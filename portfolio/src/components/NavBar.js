import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../logo.png'

export default function NavBar() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div>
                <img src={logo} className="navbar-logo" alt="logo" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
            </div>
        </div>
    )
}
