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
    this.animate();
  }

  public animateGithubBorder() {
    var tl = gsap.timeline();

    tl.set('#border-githubButton', { autoAlpha: 20 });

    tl.to('#border-githubButton', { duration: 0.3, borderColor: 'blue' });
    tl.to('#border-githubButton', { duration: 0.3, borderColor: 'purple' });
  }

  public animateGithubBorderOut() {
    var tl = gsap.timeline();

    tl.set('#border-githubButton', { autoAlpha: 20 });

    tl.to('#border-githubButton', { duration: 0.4, borderColor: 'gray' });
  }

  private animate() {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', () => {
      gsap.set('.card', { position: 'relative' });
      gsap.set('.card', { marginBottom: '50px' });
      gsap.set('.card:nth-child(2)', { scale: '0.98' });
      gsap.set('.card:nth-child(3)', { scale: '0.96' });
      gsap.set('.card:nth-child(4)', { scale: '0.94' });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cardTrigger',
          scrub: true,
          end: '+=5000px',
          pin: true,
          start: 'top 100px',
        },
      });

      tl.to('.card', {
        yPercent: -140,
        scale: 1.1,
        rotate: 2,
        stagger: 0.5,
      });
      tl.to(
        '.card',
        {
          stagger: 0.5,
          delay: 0.1,
          filter: 'blur(10px) grayscale(1)',
        },
        '<',
      ),
        tl.from(
          '.status',
          {
            y: 5,
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
          },
          '<1',
        );
      tl.from(
        '.flyInText',
        {
          stagger: 0.02,
          y: 15,
          filter: 'blur(10px)',
          opacity: 0,
          duration: 0.2,
        },
        '<',
      );
    });
  }
}
