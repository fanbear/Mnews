document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.header-menu__button');
    const list = document.querySelector('.header-menu__list');

    const menuToggle = () => {
        list.classList.toggle('header-menu__list-active');
        menuBtn.classList.toggle('header-menu__button-active');
        return 0;

    }


    menuBtn.addEventListener('click', () => {
        menuToggle();
    })
})