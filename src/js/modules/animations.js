import {gsap} from "gsap";

export const animeHeroSvg = () => {
    const rec1 = document.getElementById('rectangle1');
    const rec2 = document.getElementById('rectangle2');
    const rec3 = document.getElementById('rectangle3');
    const out1 = document.getElementById('outline1');
    const out2 = document.getElementById('outline2');
    const out3 = document.getElementById('outline3');
    const rotateElements = [rec1, rec2, rec3, out1, out2, out3];

    rotateElements.forEach(el => {
        el.style.transform ='scale(1.15)'
        gsap.set(el, {transformOrigin: "center"});
        gsap.to(el, {rotation: 360, duration:10, ease: "none", repeat:-1, delay:0.4});
    })
}