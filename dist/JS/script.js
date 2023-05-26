// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const back = document.querySelector('#back');

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        back.classList.remove('hidden');
        back.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        back.classList.remove('flex');
        back.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

// klik di luar hamburger
window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != navmenu){
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
})

// dark mode
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function() {
    if (darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// pindahkan posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggle.checked = true;
  } else {
    darktoggle.checked = false;
  }