import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { ProjectComponent } from './components/project/project/project.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SchluesselmomenteProjectComponent } from './components/project/schluesselmomente-project/schluesselmomente-project.component';
import { KorrekturhilfeProjectComponent } from './components/project/korrekturhilfe-project/korrekturhilfe-project.component';
import { PortfolioProjectComponent } from './components/project/portfolio-project/portfolio-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { OdinMemoryComponent } from './components/project/odin-memory/odin-memory.component';

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
    PortfolioProjectComponent,
    FooterComponent,
    OdinMemoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.animateProjectHeader();
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
}
