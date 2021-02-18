import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectsGrid = () => {
    const projects = [
        {
            title: 'Portfolio',
            src: 'https://reactjs.org/logo-og.png',
            message: 'My owm portfolio.',
            link: 'https://github.com/Mauricio-xxi/portfolio',
        },
        {
            title: 'Predicting stock prices',
            src: 'https://miro.medium.com/max/640/1*XzIRJGujfqAiOV2EIQgR_Q.png',
            message:
                'A basic practice to predict stock prices in python last 60 days predict next day.',
            link: 'https://github.com/Mauricio-xxi/predicting-stock-prices',
        },
        {
            title: 'Image transformations',
            src:
                'https://www.ybrikman.com/assets/img/blog/aws-docker/docker-on-aws.png',
            message: 'my first pip package.',
            link: 'https://github.com/Mauricio-xxi/image_transformations',
        },
    ]
    return (
        <div
            style={{
                height: 'fitContent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>My projects</h2>
            <h6>awesome projects</h6>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '95vw',
                    justifyContent: 'space-around',
                }}
            >
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            title={project.title}
                            src={project.src}
                            message={project.message}
                        />
                    )
                })}
            </div>
        </div>
    )
}
