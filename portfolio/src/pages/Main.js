import React from 'react'
import logo from '../logo.png'

export const Main = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello, I'm Álvaro Camacho</h1>
                <p>Full Stack Developer</p>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/alvaro-mauricio-camacho-davila/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
                <h2>Work in progress...</h2>
                <div>
                    <h2>my projects</h2>
                </div>
            </header>
        </div>
    )
}
