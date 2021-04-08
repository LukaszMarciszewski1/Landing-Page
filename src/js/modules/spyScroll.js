export const spyScroll = () => {
  const navItems = document.querySelectorAll('.nav__item')
  const mainSection = document.querySelectorAll('.section')

  //   add active class for click item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        navItems.forEach(item => item.classList.remove('nav__item--active'))
        item.classList.add('nav__item--active')
      }, 300)
    })
  })

  //   change the active element on the scroll event
  window.onscroll = (() => {
    mainSection.forEach((section, i) => {
      let rect = section.getBoundingClientRect().y
      if (rect < window.innerHeight - 200) {
        navItems.forEach(item => item.classList.remove('nav__item--active'))
        navItems[i].classList.add('nav__item--active')
      }
    })
  })

}