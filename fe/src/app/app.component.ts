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
    this.animateSkillsHeader();
  }

  private animateSkillsHeader() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('#skills', { xPercent: 60 });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills',
        scrub: true,
      },
      stagger: 0.4,
    });
    tl.to('#skills', {
      xPercent: -50,
    });
  }
  private animateProjectHeader() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('#projects', { xPercent: 60 });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        scrub: true,
      },
      stagger: 0.4,
    });
    tl.to('#projects', {
      xPercent: -50,
    });
  }
}
