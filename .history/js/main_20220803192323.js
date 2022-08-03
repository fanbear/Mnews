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

const tabWrapper = document.querySelectorAll('.tab__wrapper');

if (tabWrapper) {
    tabWrapper.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.target.closest('.tab__item').classList.toggle('tab__item-active');
        })
    })

}

// Technology main animation ***********************
//**************************************************

const technology = document.querySelector('.technology-wrapper');

if (technology) {
    const tList = technology.querySelectorAll('.technology-item');

    tList.forEach((item, i) => {
        console.log(item);
        item.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1)' },
            { transform: 'scale(1)' },
            { transform: 'scale(1)' },
            { transform: 'scale(0)' }
        ], {
            duration: 12000,
            iterations: Infinity,
            delay: (i * 1000)
        })
    })
}
// animation: why-animate 6s infinite;
//     animation-delay: 2s;