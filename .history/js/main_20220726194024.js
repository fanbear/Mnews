// digital count *********************
//************************************ */

let onScrollSwitch = false;
const digitWrapper = document.querySelector('.who-digit__wrapper');

const digitWidget = (onScrollSwitch) => {
    const digitals = document.querySelectorAll('.who-digit-item label span');

    digitals.forEach(item => {
        const digit = parseInt(item.textContent);
        console.log(digit);
    })
}

if (digitWrapper) {
    document.addEventListener('scroll', () => {

        const offset = digit.offsetTop;
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if ((posTop + 700 > offset) && !onScrollSwitch) {
            onScrollSwitch = true;
        }
        if (onScrollSwitch = true)

})
}
