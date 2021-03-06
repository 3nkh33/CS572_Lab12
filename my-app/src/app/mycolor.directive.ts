import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @Output() colorChange = new EventEmitter();
  private colors = ['green', 'red', 'blue', 'yellow', 'orange', 'cyan'];
  private color: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', this.colors[0]);
  }
  @HostListener('click')
  onMouseClick() {
    this.changeColor();
  }
  changeColor(): void {
    let num = Math.floor(Math.random() * Math.floor(6));
    this.color = this.colors[num];
    this.el.nativeElement.style.backgroundColor = this.color;
    this.colorChange.emit(this.color);
  }
}
