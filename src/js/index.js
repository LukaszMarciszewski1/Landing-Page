import '../scss/style.scss';
import {menu} from './modules/menu.js'
import {animations} from './modules/animations.js'
import {spyScroll} from './modules/spyScroll.js'
import {handleSubmit} from './modules/contact.js'
import {showSvg} from './modules/svg.js'

window.addEventListener("DOMContentLoaded", () => {
    showSvg()
    menu()
    animations()
    spyScroll()
    document.querySelector("#contact-form").addEventListener("submit", handleSubmit);
});