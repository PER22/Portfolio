window.addEventListener('scroll', () => {
    const background = document.getElementById('background');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = Math.max(Math.min((window.scrollY / maxScroll) * 100, 100), 0);
    background.style.backgroundPositionX = `${scrollPercentage}%`;
});


document.addEventListener('DOMContentLoaded', (event) => {


    function isInView(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.bottom - rect.top;
        let visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        visibleHeight = Math.max(0, visibleHeight);
        return (visibleHeight / elementHeight) >= 0.5;
    }

    function checkPosition() {
        const elements = document.querySelectorAll('.card, .skill-category');
        for (let i = 0; i < elements.length; i++) {
            if (isInView(elements[i])) {
                elements[i].classList.add('in-view');
            }
            else {
                elements[i].classList.remove('in-view');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();

});


document.addEventListener('DOMContentLoaded', (event) => {
    async function getProfilePicURL() {
        const profilePicElement = document.getElementById("profile-picture");
        const githubBioElement = document.getElementById("github-bio");
        const response = await fetch("https://api.github.com/users/PER22");
        const githubUserObject = await response.json();
        const profilePicURL = githubUserObject["avatar_url"];
        const bioString = githubUserObject["bio"];
        profilePicElement.setAttribute("src", profilePicURL);
        githubBioElement.innerText = bioString;
    }
    getProfilePicURL();

});

