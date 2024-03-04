import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-buttons',
  standalone: true,
  imports: [],
  templateUrl: './window-buttons.component.html',
  styleUrl: './window-buttons.component.css',
})
export class WindowButtonsComponent {
  @Input() window!: Element;

  shrink() {
    let shrinkClasses = ['fixed', 'scale-[0%]', 'opacity-0'];
    this.window.classList.add(...shrinkClasses);
    window.scrollTo({ top: this.getTimelinePosition(), behavior: 'smooth' });
    setTimeout(() => {
      this.window.classList.remove(...shrinkClasses);
    }, 2100);
  }
  grow() {
    let growClasses = ['fixed', 'scale-[200%]', 'opacity-0'];
    this.window.classList.add(...growClasses);
    window.scrollTo({ top: this.getTimelinePosition(), behavior: 'smooth' });
    setTimeout(() => {
      this.window.classList.remove(...growClasses);
    }, 2100);
  }

  private getTimelinePosition() {
    let timeline = document.querySelector('app-timeline')!;
    let scrollPoint = timeline.getBoundingClientRect().top - 50;
    return scrollPoint;
  }
}
