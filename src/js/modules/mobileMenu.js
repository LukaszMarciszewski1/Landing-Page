export const mobileMenu = () => {
    const hamburgerBtn = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav__container');
    const navItem = [...document.querySelectorAll('.nav__item')];

    //hamburger---->
    const openMenu = () => {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('hamburger--active');

            if (hamburgerBtn.classList.contains('hamburger--active')) {
                navContainer.classList.add('nav__container--active');
            } else {
                navContainer.classList.remove('nav__container--active');
            }

        })
    }
    
    const coloseMenu = () => {
        navItem.forEach(item => item.addEventListener('click', () => {
            if(navContainer.classList.contains('nav__container--active')){}
            navContainer.classList.remove('nav__container--active');
            hamburgerBtn.classList.remove('hamburger--active');
        }))
    }
 
    openMenu();
    coloseMenu();
}