// digital count *********************
//************************************ */

let onScrollSwitch = false;

const digitWidget = (onScrollSwitch) => {
    const digitals = document.querySelectorAll('.who-digit-item label span');

    digitals.forEach(item => {
        const digit = parseInt(item.textContent);
        console.log(digit);
    })
}

document.addEventListener('scroll', () => {
    const digit = document.querySelector('.who-digit__wrapper');
    const offset = digit.offsetTop;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if ((posTop + 700 > offset) && !onScrollSwitch) {
        onScrollSwitch = true;
    }

})
