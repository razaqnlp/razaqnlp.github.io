// mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

// gentle scroll reveal (subtle, single fade+shift, respects reduced motion via CSS)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.1});
revealEls.forEach(el => io.observe(el));

// active nav link on scroll (home page section anchors)
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.top-header nav a');
const navIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const link = document.querySelector('.top-header nav a[href="#' + e.target.id + '"], .top-header nav a[href="index.html#' + e.target.id + '"]');
    if(link){ if(e.isIntersecting){ navLinks.forEach(l=>l.classList.remove('active')); link.classList.add('active'); } }
  });
}, {rootMargin:'-40% 0px -50% 0px'});
sections.forEach(s => navIo.observe(s));
