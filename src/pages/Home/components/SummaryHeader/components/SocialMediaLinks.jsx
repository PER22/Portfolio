import './SocialMediaLinks.css'
export default function SocialMediaLinks() {

    return (<div id="social-media-container">
        <a className="social-media-link" target="_blank" rel="noreferrer" href="https://linkedin.com/in/padraic-reilly">
            <img className="social-media-logo" src="logos/linkedin_logo.png" alt="LinkedIn Logo" />
        </a>
        <a className="social-media-link" target="_blank" rel="noreferrer" href="https://github.com/PER22">
            <img className="social-media-logo" src="logos/github_logo.png" alt="GitHub Logo" />
        </a>
        <a className="social-media-link" target="_blank" rel="noreferrer" href="resume/Padraic-Reilly-Resume.pdf" download="Padraic-Reilly-Resume.pdf">
            <img className="social-media-logo" src="logos/resume_logo.png" alt="Resume Logo" />
        </a>
        <a className="social-media-link" target="_blank" rel="noreferrer" href="https://leetcode.com/u/PadraicReilly/">
            <img className="social-media-logo" src="logos/leetcode_logo.png" alt="LeetCode Logo" />
        </a>
    </div>);
}