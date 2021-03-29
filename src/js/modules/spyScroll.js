export const spyScroll = () => {
    // const targets = document.querySelectorAll(".section"),
    //  options = {
    //   threshold: 0.35,
    //  };
     
    // // change the active element on the scroll event
    // if ("IntersectionObserver" in window) {
    //  (() => {
    //   const inView = target => {
    //    const interSectionObs = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //      const elem = entry.target;
    //      let currentNav = document.querySelector(
    //       `.nav__container a[href='#${elem.id}']`
    //      );
    //         entry.isIntersecting 
    //         ? currentNav.classList.add("nav__item--active") 
    //         : currentNav.classList.remove("nav__item--active");
    //     });
    //    }, options);
    //    interSectionObs.observe(target);
    //   };
    //   targets.forEach(inView);
    //  })();
    // }

const navItems = document.querySelectorAll('.nav__item')
const mainSection = document.querySelectorAll('.section')
//   add active class for click item
  navItems.forEach(item => {
      item.addEventListener('click', ()=>{
        setTimeout(() => {
            navItems.forEach(item => item.classList.remove('nav__item--active'))
            item.classList.add('nav__item--active')
          }, 300)
      })
      })

//   change the active element on the scroll event
  window.onscroll = (()=> {
    mainSection.forEach((section, i)=> {
      let rect = section.getBoundingClientRect().y
      if(rect < window.innerHeight - 300){
          navItems.forEach(item => item.classList.remove('nav__item--active'))
          navItems[i].classList.add('nav__item--active')
      }
    })
  })
}





  