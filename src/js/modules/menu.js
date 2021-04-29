export const menu = () => {
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__container');
    const navItem = [...document.querySelectorAll('.nav__item')];

    //hamburger ----------------->
    const openMenu = () => {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('hamburger--active');

            if (hamburgerBtn.classList.contains('hamburger--active')) {
                nav.classList.add('nav__container--active');
            } else {
                nav.classList.remove('nav__container--active');
            }

        })
    }

    const coloseMenu = () => {
        navItem.forEach(item => item.addEventListener('click', () => {
            if (nav.classList.contains('nav__container--active')) {}
            nav.classList.remove('nav__container--active');
            hamburgerBtn.classList.remove('hamburger--active');
        }))
    }

    //scroll nav ----------------->
    const navScroll = () => {
        let prevScrollpos = window.pageYOffset;
        window.addEventListener('scroll', () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                nav.classList.add('nav--hide');
            } else {
                nav.classList.remove('nav--hide');
            }
            prevScrollpos = currentScrollPos;
        })
    }
    navScroll()
    openMenu();
    coloseMenu();
}