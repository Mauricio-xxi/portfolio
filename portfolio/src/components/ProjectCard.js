import React from 'react'

export const ProjectCard = ({ title, src, message, link }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={src}
                        alt="Avatar"
                        style={{ width: '300px', height: '300px' }}
                    />
                </div>
                <div className="flip-card-back">
                    <h1>{title}</h1>
                    <p>Architect & Engineer</p>
                    <p>{message}</p>
                    <a href={link}>Github</a>
                </div>
            </div>
        </div>
    )
}
