import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../logo.png'

export default function NavBar() {
    return (
        <div
            style={{
                padding: '1rem',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <img src={logo} className="navbar-logo" alt="logo" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div className="navbar-buttons">
                    <Link to="/">Home</Link>
                </div>
                <div className="navbar-buttons">
                    <Link to="/users">Projects</Link>
                </div>
                <div className="navbar-buttons">
                    <Link to="/about">Contact</Link>
                </div>
            </div>
        </div>
    )
}
