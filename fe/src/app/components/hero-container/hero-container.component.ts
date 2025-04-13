import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-hero-container',
    imports: [HeroComponent, HeaderComponent],
    templateUrl: './hero-container.component.html',
    styleUrl: './hero-container.component.css'
})
export class HeroContainerComponent {

}
