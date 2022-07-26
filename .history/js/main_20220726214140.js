// digital count *********************
//************************************ */

let onScrollSwitch = false;
const digitWrapper = document.querySelector('.who-digit__wrapper');

const digitWidget = () => {
    const digitals = document.querySelectorAll('.who-digit-item');

    digitals.forEach((item, i) => {
        item.querySelector('span').classList.add(`digit-animation-${i}`);
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


// Benefits tabs ****************************
//******************************************** */

const tabWrapper = document.querySelector('.benefits-tab__wrapper');
const tabItems = document.querySelectorAll('.benefint-tab__item');

if (tabWrapper) {
    tabWrapper.addEventListener('click', (e) => {
        if (e.target.className == 'benefint-tab__item-button') {
            console.log(e.target);
            console.log(e.target.parentNode);
            e.target.parentNode.classList.toggle('benefint-tab__item-active');

        }
    })
}
