import React from 'react'
import logo from '../logo.png'
import mainImage from '../assets/images/mainImage.jpg'

export const Main = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 style={{ margin: '0.83em 0 0' }}>My name is</h2>
                <h1 style={{ margin: '0' }}>Álvaro Camacho</h1>
                <div
                    style={{
                        color: 'black',
                        backgroundColor: '#fcee3d',
                        padding: '0.3em',
                    }}
                >
                    <h7 style={{ fontWeight: '900' }}>
                        I'm a Full Stack Developer
                    </h7>
                </div>
            </header>
            <div
                style={{
                    height: '460px',
                    display: 'flex',
                    backgroundColor: '#ececec',
                    padding: '2rem',
                }}
            >
                <div
                    style={{
                        width: '50%',
                        padding: '2rem',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            height: '80%',
                            width: '80%',
                            backgroundColor: '#121212',
                            position: 'absolute',
                        }}
                    ></div>
                    <div
                        style={{
                            height: '80%',
                            width: '80%',
                            position: 'absolute',
                            top: '17%',
                            left: '20%',
                            backgroundImage: `url(${mainImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                </div>
                <div style={{ width: '50%', padding: '2rem' }}>
                    <h7>who am I</h7>
                    <h2>Hello</h2>
                    <p>
                        I am a full stack developer and financial technical
                        developer with a great orientation to new technologies
                        and businesses, an entrepreneur who loves challenges and
                        new projects. With my startup Psychologicapp I have won
                        prizes such as Rottary scholarship and the award for
                        disruptive technology in the program "Yuzz" of the
                        Santander group. I have recently finished Ironhack's
                        Full Stack Program.
                    </p>
                </div>
            </div>
            <div style={{ height: '90vh' }}>
                <h2>My Work</h2>
                <h7>awesome projects</h7>
            </div>
        </div>
    )
}
