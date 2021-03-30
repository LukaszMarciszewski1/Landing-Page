import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {

  const animeHeroSvg = () => {
    const rec1 = document.getElementById('rectangle1');
    const rec2 = document.getElementById('rectangle2');
    const rec3 = document.getElementById('rectangle3');
    const out1 = document.getElementById('outline1');
    const out2 = document.getElementById('outline2');
    const out3 = document.getElementById('outline3');
    const rotateElements = [rec1, rec2, rec3, out1, out2, out3];

    rotateElements.forEach(el => {
      el.style.transform = 'scale(1.15)'
      gsap.set(el, {
        transformOrigin: "center"
      });
      gsap.to(el, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
        delay: 0.4
      });
    })
  }

  const animeSectionScroll = () => {
    const sectionContent = document.querySelectorAll('.section__content');
    const sectionTitle = document.querySelectorAll('.content__title');
    const heroTxt = document.querySelector('.about__about-me-txt');
    if (window.innerWidth > 700) {

      //sections container
      sectionContent.forEach(item => {
        gsap.fromTo(item, {
          y: '+=100',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.7,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item,
            start: '10% bottom',
          }
        });
      });

      //sections title 
      sectionTitle.forEach(item => {
        gsap.fromTo(item, {
          y: '+=60',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item,
            start: '15% bottom',
          }
        });
      })

      //about section
      // gsap.fromTo(heroTxt.children, {
      //   y: '+=100',
      //   opacity: 0
      // }, {
      //   y: 0,
      //   opacity: 1,
      //   stagger: 0.2,
      //   duration: 0.7,
      //   delay: 1,
      //   ease: 'easeInOut',
      // });

    }
  }

  animeHeroSvg();
  animeSectionScroll()
}