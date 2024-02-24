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
    this.animateHeader();
  }

  private animateHeader() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        scrub: true,
      },
    });
    tl.to('#projects', {
      xPercent: -100,
    });
  }
}
