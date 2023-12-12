window.addEventListener('scroll', () => {
    const body = document.body;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (window.scrollY / maxScroll) * 100
    if (scrollPercentage > 100) { scrollPercentage = 100; }
    else if (scrollPercentage < 0) { scrollPercentage = 0; }
    body.style.backgroundPositionX = `${scrollPercentage}%`;
});


document.addEventListener('DOMContentLoaded', (event) => {
    

    function isInView(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
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

