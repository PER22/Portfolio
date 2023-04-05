const body = document.body;
window.addEventListener('scroll', () => {
  body.style.backgroundPositionX = `${-window.scrollY}px`;
});