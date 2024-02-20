import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { ProjectComponent } from './components/project/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    HeroContainerComponent,
    ProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'fe';

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target.querySelector('.onScroll')!;

        if (entry.isIntersecting) {
          square.classList.add('slide-in');
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('slide-in');
      });
    });

    observer.observe(document.querySelector('.slide-wrapper')!);
  }
}
