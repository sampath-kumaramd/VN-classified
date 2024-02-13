import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() id: string= ''; 
  @Input() image: string = '';
  @Input() title: string  = '';
  @Input() content: string = '';
}