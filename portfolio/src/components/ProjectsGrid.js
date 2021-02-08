import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectsGrid = () => {
    const projects = [
        {
            title: 'first Project',
            src:
                'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: 'first Project',
            src:
                'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: 'first Project',
            src:
                'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]
    return (
        <div
            style={{
                height: '90vh',
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
