

(function(){
    const header = document.querySelector('header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    }
})();

(function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close');
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    close.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
}) ();



// setTimeout(function () {
//     const mask = document.querySelector('.mask');
//     mask.classList.add('none');
// }, 1000);

(function() {
    const mask = document.querySelector('.mask')
    window.addEventListener('load', () => {
        mask.classList.add('hide')
        setTimeout(() => {
            mask.remove()
        }, 1000)
    })
})();