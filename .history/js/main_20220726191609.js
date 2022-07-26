// digital count *********************
//************************************ */


document.addEventListener('scroll', () => {
    const digit = document.querySelector('.who-digit__wrapper');
    const offset = digit.offsetTop;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(offset);
    console.log(posTop);
})
