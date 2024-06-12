import React from "react";
import useInView from "../../components/hooks/useInView";
import useBackgroundColor from "../../components/hooks/useBackgroundColor";
import './About.css';

export default function About() {
    useBackgroundColor('#005f73');
    useInView('.card, .about-card');
    return (
        <>
            <p className="card about-card">I left my insurance accounting job in 2018 to pursue my dream of earning a computer science degree. I was
                accepted to UCR's Bourns College of Engineering, and graduated 4 years later in June of 2022.
                During that time, I worked with a wide variety of tools and technologies, and absorbed many
                different software-related skill sets.</p>

            <p className="card about-card">Computer science was a broad education, largely focused on math, and so I decided to expand my practical
                understanding of web development by enrolling in a General Assembly bootcamp and focused on getting up and running as a full stack developer.</p>

            <p className="card about-card">After finishing the bootcamp, I did an internship with a startup that was aiming to create a low-code automation platform, with a focus on integrating third party APIs and passing results between them. I worked on state machine generation logic for the majority of my time there. </p>

            <p className="card about-card">I was then accepted as a candidate for placements at Cook Systems, a contracting firm for tech employees.
                They preemptively provide their candidates with 2 months of training in Spring Boot and related technologies,
                in order to meet the needs of their clients. I, along with my classsmates, still await placement, but the bootcamp style of immersive learning was great.</p>

            <p className="card about-card">I am someone who learns every day. I love mastering
                new skills, applying new knowledge. I enjoy LeetCode, and answer questions in a variety
                of languages for fun. I have also completed many tech-related courses, and plan to continue
                doing so. </p>

            <p className="card about-card">I also pride myself on being an excellent teammate. I know when to lead and when to follow, when
                to speak up and when to bite my tongue. I am affable, humorous, respectful, and flexible. I know
                when to ask for more work, and when to declare that I may be in over my head. I don't hide my
                mistakes, but rather use them as learning opportunities. I am eager to work alongside more
                experienced programmers and tech workers, and look forward to receiving a chance to do so.</p>

            <p className="card about-card">In my spare time, I like to spend time with my girlfriend, family, and
                friends. I am the doorman for a grumpy black cat, and I have a 9 year old Husky/Golden Retriever.
                Sometimes I design, build, fly, crash, and repair drones.
            </p>
        </>
    );
}