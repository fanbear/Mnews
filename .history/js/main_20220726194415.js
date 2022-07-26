// digital count *********************
//************************************ */

let onScrollSwitch = false;
const digitWrapper = document.querySelector('.who-digit__wrapper');

const digitWidget = (onScrollSwitch) => {
    // const digitals = document.querySelectorAll('.who-digit-item label span');

    // digitals.forEach(item => {
    //     const digit = parseInt(item.textContent);
    //     console.log(digit);
    // })
    console.log("asd");
}

if (digitWrapper) {
    document.addEventListener('scroll', (v) => {

        const offset = digitWrapper.offsetTop;
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        console.log(offset);
        console.log(posTop + 700);


        if (((posTop + 700) - offset > 100)) {
            onScrollSwitch = true;
        } else {
            onScrollSwitch = false;
        }

        if (onScrollSwitch = true) {
            digitWidget();
        }

    })
}
