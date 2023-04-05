const body = document.body;
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  body.style.backgroundPositionX = `${-scrollPos}px`;
});