import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  category: string = 'all';
  search: string = '';
  country: string = 'all';
  city: string  = 'all';

  onSubmit(data : any) {
    console.log(data);
  }
}
