import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {

  const animeHero = () => {
    const main = document.querySelectorAll('.main')
    const topHero = document.querySelector('.about-top__text-container')
    const heroTxt = document.querySelector('.about-bottom__txt-container');
    const line = document.querySelector('.l1');
    const svgContainer = document.querySelector('.intro-container');
    const svgHero = document.querySelector('.intro-svg');
    const rec1 = document.getElementById('rectangle1');
    const rec2 = document.getElementById('rectangle2');
    const rec3 = document.getElementById('rectangle3');
    const out1 = document.getElementById('outline1');
    const out2 = document.getElementById('outline2');
    const out3 = document.getElementById('outline3');
    const rotateElements = [rec1, rec2, rec3, out1, out2, out3];

    gsap.set(main, {
      visibility: "visible"
    })

    //container svg
    if (window.innerWidth > 700) {
      gsap.set([svgContainer, svgHero, heroTxt.children, line, topHero.children], {
        autoAlpha: 0,
      })

      const tl = gsap.timeline({
        defaults: {
          ease: 'elastic.outout(1,0.3)'
        }
      });
      tl.fromTo(topHero.children, {}, {
          delay: 0.3,
          duration: 0.4,
          stagger: 0.3,
          autoAlpha: 1
        })
        .fromTo(svgContainer, {
          y: "-50",
          scaleY: 0
        }, {
          y: "+=50",
          scaleY: 1,
          duration: 0.5,
          autoAlpha: 1,
          delay: 0.5
        }, '-=0.70')
        .to(svgHero, {
          duration: 0.5,
          delay: 0.1,
          autoAlpha: 1,
          ease: "none",
        })
        .fromTo(heroTxt.children, {
            y: '-50',
          }, {
            y: "+=50",
            stagger: 0.3,
            duration: 0.5,
            autoAlpha: 1
          },
          '-=0.5'
        )
        .fromTo(line, {
          height: '0%',
        }, {
          height: '+=100%',
          duration: 0.3,
          autoAlpha: 1
        })
    }
    //rotate elemnets in svg
    rotateElements.forEach(el => {
      el.style.transform = 'scale(1.15)'
      gsap.set(el, {
        transformOrigin: "center",
      });
      gsap.to(el, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
        delay: 2
      });
    });
  }

  const animeSectionScroll = () => {
    const sectionContent = document.querySelectorAll('.section__content');
    const sectionTitle = document.querySelectorAll('.content__title');
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
    }
  }

  animeHero();
  animeSectionScroll()
}