import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-buttons',
  standalone: true,
  imports: [],
  templateUrl: './window-buttons.component.html',
  styleUrl: './window-buttons.component.css'
})
export class WindowButtonsComponent {
  @Input() window!: Element;

  shrink() {
    let shrinkClasses = ["fixed", "scale-[0%]", "opacity-0"];
    this.window.classList.add(...shrinkClasses);
    window.scrollTo({top: 1000, behavior: "smooth"});
    setTimeout(() => {
      this.window.classList.remove(...shrinkClasses);
    }, 3000);

  }
  grow() {
    let growClasses = ["fixed", "scale-[200%]", "opacity-0"];
    this.window.classList.add(...growClasses);
    window.scrollTo({top: 1000, behavior: "smooth"});
    setTimeout(() => {
      this.window.classList.remove(...growClasses);
    }, 3000);
  }

}
