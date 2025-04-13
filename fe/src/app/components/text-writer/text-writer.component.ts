import { Component } from '@angular/core';

@Component({
    selector: 'app-text-writer',
    imports: [],
    templateUrl: './text-writer.component.html',
    styleUrl: './text-writer.component.css'
})
export class TextWriterComponent {
  private words = ['Always growing', 'Always improving'];
  public typeWord: string = '';
  public cursor = '|';
  public length = 0;
  public runFlag = true;

  ngOnInit() {
    setTimeout(() => {
      this.makeWords();
    }, 3000);
  }

  public async restart() {
    if (this.runFlag === false) {
      this.runFlag = true;
      await this.removeLetters(0);
      this.makeWords();
    }
  }

  private async makeWords() {
    for (let [i, word] of this.words.entries()) {
      let letters: string[] = word.split('');
      await this.addLetters(letters);
      if (i < this.words.length - 1) {
        await this.removeLetters(2000);
        this.runFlag = false;
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
        this.length = this.typeWord.length;
        let interval = setInterval(() => {
          let wordWithPoppedLetter = this.typeWord.slice(0, this.length);
          this.typeWord = wordWithPoppedLetter;
          i++;
          this.length -= 1;
          if (i >= length + 1) {
            clearInterval(interval);
            resolve("");
          }
        }, 100);
      }, delay);
    });
  }
}
