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
  }
  grow() {
  }
}
