import { Component } from '@angular/core';

@Component({
  selector: 'app-text-writer',
  standalone: true,
  imports: [],
  templateUrl: './text-writer.component.html',
  styleUrl: './text-writer.component.css'
})
export class TextWriterComponent {
  private words = ['Always growing', 'Always improving'];
  public typeWord: string = '';
  public cursor = '|';
  public length = 0;

  ngOnInit() {
    setTimeout(() => {
      this.makeWords();
    }, 3000);
  }

  public async restart() {
    await this.removeLetters(0);
    this.makeWords();
  }

  private async makeWords() {
    for (let [i, word] of this.words.entries()) {
      let letters: string[] = word.split('');
      await this.addLetters(letters);
      if (i < this.words.length - 1) {
        await this.removeLetters(2000);
      }
    }
  }

  private addLetters(letters: string[]) {
    return new Promise((resolve) => {
      let i = 0;
      let duration = 100;
      let interval = setInterval(() => {
        this.typeWord += letters[i];
        i++;
        if (i >= letters.length) {
          clearInterval(interval);
          resolve(duration * letters.length);
        }
      }, duration);
    });
  }

  private removeLetters(delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
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
      }, delay);
    });
  }

}
