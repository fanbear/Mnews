// digital count *********************
//************************************ */

let onScrollSwitch = false;
const digitWrapper = document.querySelector('.who-digit__wrapper');

const digitWidget = (onScrollSwitch) => {
    const digitals = document.querySelectorAll('.who-digit-item');

    digitals.forEach((item) => {
        const digit = item.querySelector('span').textContent;
        console.log(digit);
    })



}

if (digitWrapper) {
    document.addEventListener('scroll', (v) => {

        const offset = digitWrapper.offsetTop;
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if ((posTop + 700 - offset > 10 && posTop + 700 - offset < 200) && !onScrollSwitch) {
            onScrollSwitch = true;
        } else {
            onScrollSwitch = false;
        }

        if (onScrollSwitch == true) {
            digitWidget();
        }

    })
}