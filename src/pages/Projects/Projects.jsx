import React from 'react';
import useInView from '../../components/hooks/useInView';
import './Projects.css';
import useBackgroundColor from '../../components/hooks/useBackgroundColor';
import ProjectCard from './components/ProjectCard';

export default function Projects() {
    useBackgroundColor('#186a2e');
    useInView('.card, .project-card');
    const projects = [
        {
            "title": "Mock Twitter API",
            "link": "https://github.com/PER22/mock-twitter-api",
            "image_path": "images/twitter-image.svg.png",
            "description": "A Twitter-themed API, built with Java, Spring, JPA, and PostgreSQL. Users can CRUD tweets, with emedded hashtags and mentions, as well as like, reply to, and repost them."
        },
        {
            "title": "The-Howling-Infinite.com",
            "link": "https://www.the-howling-infinite.com",
            "image_path": "images/thi-image.png",
            "description": "A freelance project, comissioned by a retired psychologist with a deep interest in the history of JFK and Lee Harvey Oswald. The client has written a screenplay and a series of essays about Oswald, and will be publishing them as he completes them."
        },
        {
            "title": "SimpFi.ai",
            "link": "https://alpha.simpfi.ai/",
            "image_path": "images/simpfi-image.png",
            "description": "SimpFi was a project I worked on while interning at DecOps. It aims to allow users to create automated workflows by linking APIs together using a no-code, drag-and-drop UI."
        },
        {
            "title": "FlowBoard",
            "link": "https://dry-pine-9148.fly.dev/",
            "image_path": "images/flow-board.png",
            "description": "FlowBoard is a KanBan board, with the ability to track multiple projects, tasks, and teams. The frontend is written in server-side rendered EJS, and the backend runs on Express.js and MongoDB."
        },
        {
            "title": "Blogolio",
            "link": "https://blogfolio-64506ccbfc71.herokuapp.com/",
            "image_path": "images/blogfolio-image.png",
            "description": "BlogFolio exists to give me a place to write about the pieces in my portfolio and talk about the development process in more detail. Each post is linked to a project, and projects are linked to a user."
        },
        {
            "title": "Tetris in C",
            "link": "https://github.com/PER22/Tetris",
            "image_path": "images/tetris-image.png",
            "description": "For an embedded systems class, I built a Tetris game using C, eight 8-bit shift registers, an RGB LED Array, and an ATMega 1284 microcontroller running at 8 Mhz."
        }
    ];

    return (
        <>
            <section id="projects">
                {
                    projects.map(
                        (project, index) => {
                            return <ProjectCard key={index} title={project.title} link={project.link} image_path={project.image_path} description={project.description}/>
                        }
                    )
                }
            </section>
        </>
    );

}