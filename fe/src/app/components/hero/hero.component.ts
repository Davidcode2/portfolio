import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextWriterComponent } from '../text-writer/text-writer.component';
import { WindowButtonsComponent } from '../window-buttons/window-buttons.component';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, TextWriterComponent, WindowButtonsComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
  @ViewChild(TextWriterComponent) textWriter!: TextWriterComponent;
  public heroElement!: Element;

  ngOnInit() {
    this.heroElement = document.getElementById('hero')!;
  }

  restartWritingAnimation() {
    this.textWriter.restart();
  }

}
