import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
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
    gsap.to('.parallaxBox1', {
      y: 100,
      x: 10,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: 'sine.inOut',
      stagger: 2
    });
    mm.add('(min-width: 1280px)', () => {
      gsap.set('.parallaxBox', {
        y: -200
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
      tl.to('.rocketShip', {
        rotate: 720,
      });
      tl.to('.parallaxBox', {
        y: (i, target) =>
          target.dataset.speed * window.scrollY / 1000,
        ease: 'none',
      }, '<');
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
