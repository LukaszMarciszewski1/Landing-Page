import '../scss/style.scss';
// window.addEventListener("DOMContentLoaded", () => {
//     console.log('ok')
// });

// class Slider {
//     constructor() {
//         this.selectMainContent = [...document.querySelectorAll('.item')]
//         this.mainContent = [...document.querySelectorAll('.main-content')]

//         this.selectMainContent.forEach(select => select.addEventListener('click', () => this.activeContent(select)))
//     }

//     contentPosition() {
//         const activeItem = this.selectMainContent.findIndex(item => item.classList.contains('nav__item--active'))
//         const size = this.mainContent[0].clientHeight
//         this.mainContent.forEach(content => {
//             content.style.transform = 'translateY(' + (-activeItem * size) + 'px)'
//             console.log(activeItem)
//         })
//     }

//     activeContent(select) {
//         this.selectMainContent.forEach(select => select.classList.remove('nav__item--active'))
//         select.classList.add('nav__item--active')
//         this.contentPosition()
//     }
// }
// const slider = new Slider()