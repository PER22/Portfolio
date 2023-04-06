const body = document.body;


window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = Math.min(100, (window.scrollY / maxScroll) * 100);
  body.style.backgroundPositionX = `${scrollPercentage}%`;
});