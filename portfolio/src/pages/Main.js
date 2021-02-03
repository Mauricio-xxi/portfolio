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
            <div
                style={{
                    height: '600px',
                    display: 'flex',
                    backgroundColor: '#ececec',
                    padding: '2rem',
                }}
            >
                <div style={{ width: '50%', padding: '2rem' }}>
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
                <div style={{ width: '50%', padding: '2rem' }}>
                    I am a full stack developer and financial technical
                    developer with a great orientation to new technologies and
                    businesses, an entrepreneur who loves challenges and new
                    projects. With my startup Psychologicapp I have won prizes
                    such as Rottary scholarship and the award for disruptive
                    technology in the program "Yuzz" of the Santander group. I
                    have recently finished Ironhack's Full Stack Program.
                </div>
            </div>
        </div>
    )
}
