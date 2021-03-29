import '../scss/style.scss';
import {Navigation} from './modules/navigation.js'
import {svgHero} from './modules/svg.js'
import {animeHeroSvg} from './modules/animations.js'
import {spyScroll} from './modules/spyScroll.js'
const hamburgerBtn=document.querySelector('.hamburger')
const nav = document.querySelector('.nav__container')
const navItem = [...document.querySelectorAll('.nav__item')]
//hamburger---->
function mobileMenu(){
    hamburgerBtn.addEventListener('click', ()=>{
        hamburgerBtn.classList.toggle('hamburger--active');
        
        if(hamburgerBtn.classList.contains('hamburger--active')){
            nav.classList.add('nav__container--active')
        } else{
            nav.classList.remove('nav__container--active')
        }
        
    })
}
function coloseMenu(){
    navItem.forEach(item => item.addEventListener('click', ()=> {
        nav.classList.remove('nav__container--active')
        hamburgerBtn.classList.remove('hamburger--active');
    }))

}
window.addEventListener("DOMContentLoaded", () => {
    mobileMenu()
    coloseMenu()
    svgHero()
    animeHeroSvg()
    spyScroll()
});


