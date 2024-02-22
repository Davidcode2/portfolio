import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.card', { position: 'relative' });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cardTrigger',
        markers: true,
        scrub: true,
        end: '+=5000px',
        pin: true,
      },
    });

    tl.to('.card', {
      yPercent: -140,
      scale: 1.1,
      rotate: 2,
      stagger: 0.5,
      filter: 'blur(10px) grayscale(1)',
    });
    tl.from('.status', {
      y: 5,
      opacity: 0,
      rotate: -20,
      scale: 0.8,
      duration: .3,
    }, "<1");
    tl.from('.flyInText', {
      stagger: 0.1,
      y: 100,
      opacity: 0,
      duration: .2,
    }, "<");
  }
}
