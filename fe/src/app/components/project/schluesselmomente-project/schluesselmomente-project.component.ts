import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-schluesselmomente-project',
  standalone: true,
  imports: [],
  templateUrl: './schluesselmomente-project.component.html',
  styleUrl: './schluesselmomente-project.component.css',
})
export class SchluesselmomenteProjectComponent {
  ngOnInit() {
    this.animate();
  }

  private animate() {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', () => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.trigger',
          scrub: true,
          markers: true,
          start: 'start 350',
        },
      });
      tl.to('.parallax', {
        y: (i, target) =>
          target.dataset.speed,
        ease: 'none',
      });
      tl.to(
        '.schluesselmomente-main-image',
        {
        },
        '>',
      );
      tl.from(
        '.schluesselmomente-card',
        {
          scrollTrigger: {
            trigger: '.schluesselmomente-card',
            scrub: true,
          },
        },
        '-=1',
      );
    });
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
}
