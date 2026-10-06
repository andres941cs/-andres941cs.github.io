const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const header = document.querySelector('#header');
const buttonCK = document.getElementById('code__klmusic');
const buttonDK = document.getElementById('demo__klmusic');
const buttonCE = document.getElementById('code__e-search');
const buttonVM = document.getElementById('code__visualmaker');
const buttonBlog = document.getElementById('code__blog');
const buttonBlogMobile = document.getElementById('code__blog-mobile');

const BLOG_REPO = 'https://github.com/andres941cs/BLOG';


const buttonLK = document.getElementById('btn__lk');
const buttonGH = document.getElementById('btn__gh');
const buttonMS = document.getElementById('btn__ms');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('change');
    menu.classList.toggle('show');
    header.style.backdropFilter = 'none';
    header.style.backgroundColor = '#0c0a10';

});
buttonCK.addEventListener('click', ()=>window.location.href='https://github.com/andres941cs/KLmusic');
buttonDK.addEventListener('click', ()=>window.location.href='https://klmusic.es/');
buttonCE.addEventListener('click', ()=>window.location.href='https://github.com/andres941cs/eSearchPlayers');
buttonVM.addEventListener('click', ()=>window.location.href='https://github.com/andres941cs/VisualMaker');
[buttonBlog, buttonBlogMobile].filter(Boolean).forEach((btn) => {
    btn.addEventListener('click', () => { window.location.href = BLOG_REPO; });
});

buttonLK.addEventListener('click', ()=>window.location.href='https://www.linkedin.com/in/andres941');
buttonGH.addEventListener('click', ()=>window.location.href='https://github.com/andres941cs');
buttonMS.addEventListener('click', ()=>window.location.href = 'mailto:andrescs941@gmail.com?subject=Asunto&body=Hola,%20quiero%20más%20información');