import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {
  const animeHero = () => {
    const rec1 = document.getElementById('rectangle1');
    const rec2 = document.getElementById('rectangle2');
    const rec3 = document.getElementById('rectangle3');
    const out1 = document.getElementById('outline1');
    const out2 = document.getElementById('outline2');
    const out3 = document.getElementById('outline3');
    const rotateElements = [rec1, rec2, rec3, out1, out2, out3];

    rotateElements.forEach(el => {
      gsap.set(el, {
        autoAlpha: 0,
      });
      gsap.to(el, {
        autoAlpha: 1,
        duration: 2,
        stagger: 0.2,
        delay: .6
      });
    });

    // rotate elemnets in svg
    rotateElements.forEach(el => {
      const min = 15;
      const max = 30;
      const speed = () => Math.floor(Math.random() * (max - min) + min);
      gsap.set(el, {
        transformOrigin: "center",
      });

      gsap.to(el, {
        rotation: 360,
        duration: speed(),
        ease: "none",
        repeat: -1,
        delay: .5
      });
    });
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
          y: '+=7',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.4,
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