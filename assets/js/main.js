const mainHeader = document.getElementById('mainHeader');
const navToggle = document.getElementById('navToggle');
const navBackdrop = document.getElementById('navBackdrop');
const mainNav = document.getElementById('mainNav');
const hasHero = document.querySelector('.hero');

function updateHeaderState() {
    if (!hasHero) return; // no dark hero on this page — header stays solid always
    if (window.scrollY > 20) {
        mainHeader.classList.add('scrolled-white');
    } else {
        mainHeader.classList.remove('scrolled-white');
    }
}

window.addEventListener('scroll', updateHeaderState);
updateHeaderState(); // check immediately too, in case the page loaded already scrolled (e.g. a #practice or #contact link)

function closeMobileNav() {
    mainHeader.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', function () {
    const isOpen = mainHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navBackdrop.addEventListener('click', closeMobileNav);

mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
});

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('mainHeader');
    var navLinks = document.querySelectorAll('a[href*="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var hash = this.getAttribute('href').split('#')[1];
            if (!hash) return;
            var target = document.getElementById(hash);
            if (!target) return;
            e.preventDefault();
            if (header && hash !== 'home') {
                header.classList.add('scrolled-white');
            }
            var headerHeight = header ? header.offsetHeight : 90;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
});
