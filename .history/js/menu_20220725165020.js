document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.header-menu__button');
    const list = document.querySelector('.header-menu__list');

    const menuToggle = () => list.classList.toggle('list-active');


    menuBtn.addEventListener('click', () => {
        menuToggle();
    })
})