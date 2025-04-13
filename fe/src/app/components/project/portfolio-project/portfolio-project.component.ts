import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-portfolio-project',
    imports: [],
    templateUrl: './portfolio-project.component.html',
    styleUrl: './portfolio-project.component.css'
})
export class PortfolioProjectComponent implements OnInit {
  ngOnInit() {
    this.animateThisProjectSection();
  }

  private animateThisProjectSection() {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', () => {
      gsap.set('.parallaxBox', {
        y: -200,
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          pin: true,
          trigger: '#spinContainer',
          start: 'top 50%',
          end: 'bottom 20%',
        },
      });
      tl.set('#spinContainer', {
        className: '+=z-50',
      });
      tl.to('.rocketShip', {
        rotate: 720,
      });
      tl.to(
        '.parallaxBox',
        {
          y: (i, target) => target.dataset.speed,
          ease: 'none',
        },
        '<',
      );
      tl.to(
        '.rocketShip1',
        {
          rotate: 360,
        },
        '<',
      );
      tl.to(
        '.rocketShip2',
        {
          rotate: 180,
        },
        '<',
      );
    });
  }
}
