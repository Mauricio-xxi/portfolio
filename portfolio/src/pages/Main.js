import React from 'react'
import logo from '../logo.png'

export const Main = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello, I'm Álvaro Camacho</h1>
                <p>Full Stack Developer</p>
                <h2>Work in progress...</h2>
            </header>
            <div style={{ height: '600px', display: 'flex', width: '100%' }}>
                <div></div>
                <div style={{ width: '50%' }}>
                    <div
                        style={{
                            height: '300px',
                            backgroundColor: '#3a3a3a',
                        }}
                    ></div>
                    <div
                        style={{
                            height: '300px',
                            backgroundColor: '#121212',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
