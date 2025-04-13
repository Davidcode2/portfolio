import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectComponent } from '../project/project.component';

@Component({
    selector: 'app-schluesselmomente-project',
    imports: [ProjectComponent],
    templateUrl: './schluesselmomente-project.component.html',
    styleUrl: './schluesselmomente-project.component.css'
})
export class SchluesselmomenteProjectComponent {
  ngOnInit() {
    this.animate();
  }

  public project = {
    title: 'Schlüsselmomente Website',
    shortTitle: 'Schlüsselmomente',
    status: 'Deployed',
    description: `
      Informational website for a coaching business.The website is built with
      plain HTML
      <span class= "inline-block"
        > <img
          class="relative top-2"
          src = "../assets/icons/icons8-html5-48.png"
          width="30"
          alt="html5 logo" /> </span
    >, CSS
      <span class= "inline-block"
        > <img
          class="relative top-2"
          src = "../assets/icons/icons8-css3-48.png"
          width="30"
          alt="css3 logo"
    /> </span>
      and JavaScript
      <span class= "inline-block"
        > <img
          class="relative top-2"
          src = "../assets/icons/icons8-javascript-48.png"
          width="30"
          alt="javascript logo" /> </span
    >.It is a static website with a contact form. Tailwindcss was used for
      styling.
`,
    url: 'https://schluesselmomente-freiburg.de',
    githubRepoUrl: 'https://github.com/Davidcode2/schluesselmomente',
    tools: [
      {
        name: 'HTML',
        color: 'fuchsia-500',
      },
      {
        name: 'CSS',
        color: 'purple-500',
      },
      {
        name: 'JavaScript',
        color: 'blue-500',
      },
      {
        name: 'PHP',
        color: 'emerald-500',
      },
    ],
  };

  private animate() {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', () => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.trigger',
          scrub: true,
          start: 'start 350',
        },
      });
      tl.to('.parallax', {
        y: (i, target) => target.dataset.speed,
        ease: 'none',
      });
      tl.to('.schluesselmomente-main-image', {}, '>');
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
