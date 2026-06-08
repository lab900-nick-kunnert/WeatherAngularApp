import { Directive, HostBinding, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class Highlighted {
  private isHighlighted = signal(false);

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted();
  }

  @HostListener('mouseover')
  onMouseOver() {
    console.log('mouse over');
    this.isHighlighted.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighlighted.set(false);
  }
}
