import '../scss/style.scss';
import {
    mobileMenu
} from './modules/mobileMenu.js'
import {
    showSvg
} from './modules/showSvg.js'
import {
    animations
} from './modules/animations.js'
import {
    spyScroll
} from './modules/spyScroll.js'

import {
    handleSubmit
} from './modules/contact.js'

    mobileMenu()
    showSvg()
    animations()
    spyScroll()
    document.querySelector("#contact-form").addEventListener("submit", handleSubmit);