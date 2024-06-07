import React from "react";
import './SkillList.css'
export default function SkillList() {
    return (<>
    <section id="skills">
            <div className="skills-grid">
              <div className="card skill-card">
                <h3>Frontend Skills</h3>
                <div className="skills-wrapper">
                  <div className="skill">
                    <img className="skill-icon" src="logos/react_logo.png" alt="React.js" />
                    <div className="skill-label">React.js</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/javascript_logo.png" alt="JavaScript" />
                    <div className="skill-label">JavaScript</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/html_logo.png" alt="HTML5" />
                    <div className="skill-label">HTML5</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/css_logo.png" alt="CSS3" />
                    <div className="skill-label">CSS3</div>
                  </div>
                </div>
              </div>

              <div className="card skill-card">
                <h3>Backend Skills</h3>
                <div className="skills-wrapper">
                  <div className="skill">
                    <img className="skill-icon" src="logos/java_logo.png" alt="Java" />
                    <div className="skill-label">Java</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/spring_logo.png" alt="Spring" />
                    <div className="skill-label">Spring</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/lombok_logo.png" alt="Lombok" />
                    <div className="skill-label">Lombok</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/mapstruct_logo.png" alt="Mapstruct" />
                    <div className="skill-label">Mapstruct</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/node_logo.png" alt="Node.js" />
                    <div className="skill-label">Node.js</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/express_logo.png" alt="Express.js" />
                    <div className="skill-label">Express.js</div>
                  </div>
                </div>
              </div>

              <div className="card skill-card">
                <h3>Database Skills</h3>
                <div className="skills-wrapper">
                  <div className="skill">
                    <img className="skill-icon" src="logos/postgresql_logo.png" alt="PostgreSQL" />
                    <div>PostgreSQL</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/jpa_logo.png" alt="JPA ORM" />
                    <div>JPA ORM</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/mongo_logo.png" alt="MongoDB" />
                    <div>MongoDB</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/mongoose_logo.png" alt="Mongoose ODM" />
                    <div>Mongoose ODM</div>
                  </div>
                </div>
              </div>

              <div className="card skill-card">
                <h3>Other Skills</h3>
                <div className="skills-wrapper">
                  <div className="skill">
                    <img className="skill-icon" src="logos/s3_logo.png" alt="AWS S3" />
                    <div>AWS S3</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/heroku_logo.png" alt="Heroku" />
                    <div>Heroku</div>
                  </div>
                  <div className="skill">
                    <img className="skill-icon" src="logos/githubcat_logo.png" alt="GitHub" />
                    <div>GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </section></>);
}