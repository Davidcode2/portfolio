import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ngOnInit() {
    this.scrollToTarget();
  }

  private scrollToTarget() {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      item.addEventListener('click', (e: any) => {
        let hashval = item.getAttribute('href')!;
        let target = document.querySelector(hashval)!;
        const y = target.getBoundingClientRect().top - 50;
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
        e.preventDefault();
      });
    }
  }
}
