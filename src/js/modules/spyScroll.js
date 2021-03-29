export const spyScroll = () => {

    const targets = document.querySelectorAll(".section"),
     options = {
      threshold: 0.51,
     };
     
    // change the active element on the scroll event
    if ("IntersectionObserver" in window) {
     (() => {
      const inView = target => {
       const interSectionObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
         const elem = entry.target;
         let currentNav = document.querySelector(
          `.nav__container a[href='#${elem.id}']`
         );
            entry.isIntersecting 
            ? currentNav.classList.add("nav__item--active") 
            : currentNav.classList.remove("nav__item--active");
        });
       }, options);
       interSectionObs.observe(target);
      };
      targets.forEach(inView);
     })();
    }
}


























  // add active class for click item
  // navItem.forEach(item => {
  //   item.onclick = (() => {
  //     setTimeout(() => {
  //       navItem.forEach(item => item.classList.remove('nav__item--active'))
  //       item.classList.add('nav__item--active')
  //     }, 300)
  //   })
  // })

  // change the active element on the scroll event
  // window.onscroll = (()=> {
  //   mainSection.forEach((section, i)=> {
  //     let rect = section.getBoundingClientRect().y
  //     if(rect < window.innerHeight - 200){
  //         navItem.forEach(item => item.classList.remove('nav__item--active'))
  //         navItem[i].classList.add('nav__item--active')
  //     }
  //   })
  // })



  