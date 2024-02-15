import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-dialog-category',
  templateUrl: './filter-dialog-category.component.html',
  styleUrls: ['./filter-dialog-category.component.scss']
})
export class FilterDialogCategoryComponent {
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      priceLow: [''],
      priceHigh: [''],
      make: [''],
      model: [''],
      yearFrom: [''],
      yearTo: [''],
      isPrivateOnly: [false],
    });
    
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    // Apply the filters to your data
  }

  
}
