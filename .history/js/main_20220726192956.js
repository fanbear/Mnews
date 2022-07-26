// digital count *********************
//************************************ */


document.addEventListener('scroll', () => {
    const digit = document.querySelector('.who-digit__wrapper');
    const offset = digit.offsetTop;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (posTop + 700 > offset) {
        console.log("asd");
    }
})
