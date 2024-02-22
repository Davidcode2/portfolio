import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() status: string = '';
  @Input() tools: string[] = [''];
  @Input() imageUrl: string = '';

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.status', {
      scrollTrigger: '.trigger',
      y: 5,
      opacity: 0,
      rotate: -20,
      duration: 2,
    });
    gsap.from('.flyInText', {
      scrollTrigger: '.trigger',
      stagger: 0.2,
      y: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.set('.card', { position: 'relative' });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cardTrigger',
        markers: true,
        scrub: true,
        end: '+=2000px',
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
  }
}
