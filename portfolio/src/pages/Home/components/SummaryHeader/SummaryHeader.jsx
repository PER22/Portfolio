import React from 'react';
import GitHubProfile from './components/GitHubProfile';
import SocialMediaLinks from './components/SocialMediaLinks';
import './SummaryHeader.css'
const SummaryHeader = () => {
    return (
        <header className="header-card card">
            <div id="name-and-headshot">
                <img id="profile-picture" src="images/headshot.png" alt="Profile picture" />
                <h1 id="name">Padraic Reilly</h1>
            </div>
            <GitHubProfile/>
            <SocialMediaLinks/>
        </header>
    );
};

export default SummaryHeader;