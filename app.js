
const navToggler = document.querySelector(".toggle-nav");
navToggler.addEventListener('click', (event) => {
    console.log("Clicked and called!")
    document.querySelector("nav").classList.toggle("show-nav");
});


window.addEventListener('scroll', () => {
    const body = document.body;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (window.scrollY / maxScroll) * 100
    if (scrollPercentage > 100) { scrollPercentage = 100; }
    else if (scrollPercentage < 0) { scrollPercentage = 0; }
    body.style.backgroundPositionX = `${scrollPercentage}%`;
});

document.querySelector(".floating-background-change-icon").addEventListener("click",
    (event)=> {
        document.body.classList.toggle("second-bg-image");
    }

);