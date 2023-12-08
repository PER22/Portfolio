window.addEventListener('scroll', () => {
    const body = document.body;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (window.scrollY / maxScroll) * 100
    if (scrollPercentage > 100) { scrollPercentage = 100; }
    else if (scrollPercentage < 0) { scrollPercentage = 0; }
    body.style.backgroundPositionX = `${scrollPercentage}%`;
});