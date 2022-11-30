import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const blurDirective = {
  mounted: function(el: HTMLElement) {
    gsap.to(
      el,
      {
        'filter': 'blur(10px)',
        scrollTrigger: {
          trigger: el,
          // markers: true,
          scrub: true,
          start: "bottom top+=200",
          end: "bottom top"
        }
      }
    );
    gsap.fromTo(
      el,
      {
        'filter': 'blur(10px)'
      },
      {
        'filter': 'blur(0px)',
        scrollTrigger: {
          trigger: el,
          // markers: true,
          scrub: true,
          start: "top bottom",
          end: "top bottom-=300"
        }
      }
    )
  }
}
