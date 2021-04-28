import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {

  const animeHero = () => {
    const wrapper = document.getElementById('wrapper')
    const topHero = document.querySelector('.hero__text-container')

    gsap.set(wrapper, {
      visibility: "visible"
    })

    //container svg
    if (window.innerWidth > 750) {
      gsap.set([topHero.children], {
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'elastic.outout(1,0.3)'
      }
      });
      tl.fromTo(topHero.children, {y: "-30",}, {
          y: "+=30",
          delay: 0.3,
          duration: 0.6,
          stagger: 0.3,
          ease: 'easeInOut',
          autoAlpha: 1
        })
    }
  }

  const animeSectionScroll = () => {
    const sectionContent = document.querySelectorAll('.section__content');
    const sectionTitle = document.querySelectorAll('.content__title');
    const projectTxt = document.querySelectorAll('.project__text-container');
    if (window.innerWidth > 750) {

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

      //project txt
      projectTxt.forEach(item => {
        gsap.fromTo(item.children, {
          y: '+=30',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item.children,
            start: '5% bottom',
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
    }
  }

  animeHero();
  animeSectionScroll()
}