import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextWriterComponent } from '../text-writer/text-writer.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TextWriterComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  shrink() {
    let shrinkClasses = ["fixed", "scale-[0%]", "opacity-0"];
    let hero = document.getElementById('hero')!;
    hero.classList.add(...shrinkClasses);
    window.scrollTo({top: 1000, behavior: "smooth"});
    setTimeout(() => {
      hero.classList.remove(...shrinkClasses);
    }, 3000);

  }
  grow() {
    let growClasses = ["fixed", "scale-[200%]", "opacity-0"];
    let hero = document.getElementById('hero')!;
    hero.classList.add(...growClasses);
    window.scrollTo({top: 1000, behavior: "smooth"});
    setTimeout(() => {
      hero.classList.remove(...growClasses);
    }, 3000);
  }
}
