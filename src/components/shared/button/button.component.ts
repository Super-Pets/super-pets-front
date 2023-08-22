import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() bgColor: 'orange' | 'purple' | 'light-pink' | 'dark-pink' | 'white' = 'orange';

}
