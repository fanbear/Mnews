// digital count *********************
//************************************ */

let onScrollSwitch = false;

const digitWidget = (onScrollSwitch) => {
    const digitas = document.querySelectorAll('.who-digit-item label span');
}

document.addEventListener('scroll', () => {
    const digit = document.querySelector('.who-digit__wrapper');
    const offset = digit.offsetTop;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if ((posTop + 700 > offset) && !onScrollSwitch) {
        onScrollSwitch = true;
    }

})
