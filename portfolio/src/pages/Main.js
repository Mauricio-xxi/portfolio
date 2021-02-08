import React from 'react'
import { Presentation } from '../components/Presentation'
import { ProjectsGrid } from '../components/ProjectsGrid'
import logo from '../logo.png'

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
                    <h6 style={{ fontWeight: '900', margin: 0 }}>
                        I'm a Full Stack Developer
                    </h6>
                </div>
            </header>
            <Presentation />
            <ProjectsGrid />
        </div>
    )
}
