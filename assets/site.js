// Progressive enhancement only; all content and language navigation work without JavaScript.
const links = [...document.querySelectorAll('.main-nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
function updateCurrentSection() {
  let active = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top <= 160) active = section;
  for (const link of links) {
    if (link.hash === `#${active?.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { updateCurrentSection(); scheduled = false; });
}, { passive: true });
updateCurrentSection();
