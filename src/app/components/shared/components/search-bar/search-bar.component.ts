import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchForm = new FormGroup({
    category: new FormControl(''),
    search: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl('')
  });

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.searchForm.value);
    // send the form data to the backend
  }
}
