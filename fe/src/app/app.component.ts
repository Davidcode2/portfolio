import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { ProjectComponent } from './components/project/project/project.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SchluesselmomenteProjectComponent } from './components/project/schluesselmomente-project/schluesselmomente-project.component';
import { KorrekturhilfeProjectComponent } from './components/project/korrekturhilfe-project/korrekturhilfe-project.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    HeroContainerComponent,
    ProjectComponent,
    TimelineComponent,
    SchluesselmomenteProjectComponent,
    KorrekturhilfeProjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.animateProjectHeader();
    this.animateThisProjectSection();
  }

  private animateProjectHeader() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('#projects', { xPercent: 60 });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        scrub: 0.1,
      },
      stagger: 0.4,
    });
    tl.to('#projects', {
      xPercent: -50,
    });
  }

  private animateThisProjectSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: '#spinContainer',
        start: 'top 50%',
        end: 'bottom 20%',
      },
    });
    tl.to('.rocketShip', {
      rotate: 720,
    });
    tl.to('.rocketShip1', {
      rotate: 360,
    }, '<');
    tl.to('.rocketShip2', {
      rotate: 180,
    }, '<');
  }
}
