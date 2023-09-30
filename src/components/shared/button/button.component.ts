import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean | null = false;
  @Input() bgColor: 'orange' | 'purple' | 'light-pink' | 'dark-pink' | 'white' =
    'orange';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
