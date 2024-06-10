export default function Projects() {
    return (
    <>
        <section id="projects">
                <article class="project-card card">
                    <div class="img-container twitter"><img class="project-image" src="assets/images/twitter-image.svg.png"/></div>
                    <div class="project-info">
                        <h3 class="project-title">Mock Twitter API
                            <a class="link-to-project" href="https://github.com/PER22/mock-twitter-api" target="_blank">
                                <img src="./assets/icons/newtab_icon.png"/>
                            </a>
                        </h3>
                        <p class="project-description">A Twitter-themed API, built with Java, Spring, JPA, and PostgreSQL. Users can CRUD tweets, with emedded hashtags and mentions, as well as like, reply to, and repost them. </p>
                    </div>
                </article>


                <article class="project-card card">
                    <div class="img-container THI"><img class="project-image" src="assets/images/thi-image.png"/></div>
                    <div class="project-info">
                        <h3 class="project-title">The-Howling-Infinite.com
                            <a class="link-to-project" href="https://www.the-howling-infinite.com" target="_blank">
                                <img src="./assets/icons/newtab_icon.png"/>
                            </a>
                        </h3>

                        <p class="project-description">A freelance project, comissioned by a retired psychologist with a deep interest in the history of JFK and Lee Harvey Oswald. The client has written a screenplay and a series of essays about Oswald, and will be publishing them as he completes them.</p>
                    </div>
                </article>

                <article class="project-card card">
                    <div class="img-container simpfi"><img class="project-image" src="assets/images/simpfi-image.png"/></div>
                    <div class="project-info">
                        <h3 class="project-title">SimpFi.ai
                            <a class="link-to-project" href="https://alpha.simpfi.ai/" target="_blank">
                                <img src="./assets/icons/newtab_icon.png"/>
                            </a>
                        </h3>

                        <p class="project-description">SimpFi was a project I worked on while interning at DecOps. It aims to allow users to create automated workflows by linking APIs together using a no-code, drag-and-drop UI.</p>
                    </div>
                </article>

                <article class="project-card card">
                    <div class="img-container flowboard"><img class="project-image" src="assets/images/flow-board.png"/></div>
                    <div class="project-info">
                        <h3 class="project-title">FlowBoard
                            <a class="link-to-project" target="_blank" href="https://dry-pine-9148.fly.dev/">
                                <img src="./assets/icons/newtab_icon.png"/></a>
                        </h3>

                        <p class="project-description">FlowBoard is a KanBan board, with the ability to track multiple projects, tasks, and teams. The frontend is written in server-side rendered EJS, and the backend runs on Express.js and MongoDB.</p>
                    </div>
                </article>

                <article class="project-card card">
                    <div class="img-container blogfolio"><img class="project-image" src="assets/images/blogfolio-image.png"/></div>
                    <div class="project-info">
                        <h3 class="project-title">Blogolio
                            <a href="https://blogfolio-64506ccbfc71.herokuapp.com/" target="_blank"
                                class="link-to-project">
                                <img src="./assets/icons/newtab_icon.png"/>
                            </a>
                        </h3>
                        <p class="project-description">BlogFolio exists to give me a place to write about the pieces in my portfolio and talk about the development process in more detail. Each post is linked to a project, and projects are linked to a user.</p>
                    </div>
                </article>

                <article class="project-card card">
                    <div class="img-container tetris"><img class="project-image" src="assets/images/tetris-image.png"/></div>
                    
                    <div class="project-info">
                        <h3 class="project-title">Tetris in C
                            <a href="https://github.com/PER22/Tetris" target="_blank" class="link-to-project">
                                <img src="./assets/icons/newtab_icon.png"/>
                            </a>
                        </h3>
                        <p class="project-description">
                            For an embedded systems class, I built a Tetris game using C, eight 8-bit shift registers, an RGB LED Array, and an ATMega 1284 microcontroller running at 8 Mhz.
                        </p>
                    </div>
                </article>
            </section>
            </>
    );

}