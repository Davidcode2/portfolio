import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { ProjectComponent } from './components/project/project/project.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SchluesselmomenteProjectComponent } from './components/project/schluesselmomente-project/schluesselmomente-project.component';

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
    SchluesselmomenteProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = "Jakob's Corner";

  ngOnInit() {
  }

  observeProjectSlideStatus() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let project = document.querySelector('.project')!;

        if (entry.isIntersecting) {
          project.classList.add('opacity-100');
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        project.classList.remove('opacity-100');
      });
    });

    observer.observe(document.querySelector('.project-wrapper')!);
  }

  observeButtonSlideStatus() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const button = entry.target.querySelector('.onScroll')!;
        if (entry.isIntersecting) {
          button.classList.add('slide-in');
          return; // if we added the class, exit the function
        }
        // We're not intersecting, so remove the class!
        button.classList.remove('slide-in');
      });
    });

    observer.observe(document.querySelector('.slide-wrapper')!);
  }
}
