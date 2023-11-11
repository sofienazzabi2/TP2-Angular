import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appEx2RandomColor]',
  standalone: true
})
export class Ex2RandomColorDirective {
  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

  constructor() {
    this.border = '1px solid #00AABB';
  }
  @HostBinding('style.color') color: string = '#00AABB';
  @HostBinding('style.border') border: string;
  @HostListener('keyup') onKeyUp() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.color = randomColor;
    this.border = `1px solid ${randomColor}`;
  }
}
