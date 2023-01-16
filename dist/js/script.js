// Hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu')
const toHome = document.querySelector('#to-home')


hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});


// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toHome.classList.remove('hidden');
        toHome.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toHome.classList.add('hidden');
        toHome.classList.remove('flex');
    }
};

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked =false;
}
