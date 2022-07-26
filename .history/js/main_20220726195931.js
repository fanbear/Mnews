// digital count *********************
//************************************ */

let onScrollSwitch = false;
const digitWrapper = document.querySelector('.who-digit__wrapper');

const digitWidget = () => {
    const digitals = document.querySelectorAll('.who-digit-item');

    digitals.forEach((item) => {
        const digit = parceInt(item.querySelector('span').textContent);
        console.log(digit);
    })
    return true;
}

if (digitWrapper) {
    document.addEventListener('scroll', (v) => {

        const offset = digitWrapper.offsetTop;
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if ((posTop + 700 > offset) && onScrollSwitch == false) {
            onScrollSwitch = digitWidget();
        }

    })
}
