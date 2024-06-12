import React from "react";

export default function ProjectCard({title, link, image_path, description}) {

    return (
        <>
            <a className="link-to-project" href={link} target="_blank">
                <article className="card project-card">
                    <div className="img-container"><img className="project-image" src={image_path} /></div>
                    <div className="project-info">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-description">{description}</p>
                    </div>
                </article>
            </a>
        </>
    );
}