import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrls: ['./home-page-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageCardComponent {
  @Input() title: string = 'Title';
  @Input() icon: string = 'fa fa-home';
  @Input() stringArray: string[] = [];
  @Input() gradientColor1: string = 'white';
  @Input() gradientColor2: string = 'white';

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.gradientColor1} 30%, ${this.gradientColor2} 50%)`;
  }
}
