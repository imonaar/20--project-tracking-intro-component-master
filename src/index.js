import "./styles/styles.scss";

const menuBtn = document.querySelector('.js-menu-btn');
const menuLinks = document.querySelector('.js-links');

const toggleMenu = () => {
    menuLinks.classList.toggle('open-menu')
    menuBtn.classList.toggle('times')
}

menuBtn.addEventListener('click', toggleMenu)