import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private words = ['Always growing', 'Always improving'];
  public typeWord: string = '';
  private displayWord!: Element;
  //public cursor = '\u{2588}';
  public cursor = '|';
  public length = 0;

  ngOnInit() {
    this.displayWord = document.querySelector('#displayWord')!;
    setTimeout(() => {
      this.makeWords();
    }, 3000);
  }

  private async makeWords() {
    for (let [i, word] of this.words.entries()) {
      let letters: string[] = word.split('');
      await this.addLetters(letters);
      if (i < this.words.length - 1) {
        await this.removeLetters();
      }
    }
  }

  private addLetters(letters: string[]) {
    return new Promise((resolve) => {
      let i = 0;
      let duration = 100;
      let interval = setInterval(() => {
        this.typeWord += letters[i];
        //this.displayWord.innerHTML += letters[i];
        i++;
        if (i >= letters.length) {
          clearInterval(interval);
          resolve(duration * letters.length);
        }
      }, duration);
    });
  }

  private removeLetters() {
    return new Promise((resolve) => {
      console.log('remove');
      let i = 0;
      let length = this.typeWord.length;
      this.length = this.typeWord.length - 1;
      let interval = setInterval(() => {
        let wordWithPoppedLetter = this.typeWord.slice(0, this.length);
        this.typeWord = wordWithPoppedLetter;
        this.length -= 1;
        i++;
        if (i >= length) {
          clearInterval(interval);
          resolve('blub');
        }
      }, 100);
    });
  }
}
