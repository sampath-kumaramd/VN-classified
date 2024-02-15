import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
  
})
export class FilterDialogComponent implements OnInit {
  formFilter!: FormGroup;

  ngOnInit(): void {
    this.formFilter = new FormGroup({
      city: new FormControl(''),
      zip: new FormControl(''),
      mobile: new FormControl(''),
      postedDate: new FormControl(''),
      createDate: new FormControl(''),
      updatedDate: new FormControl(''),
      expriedDate: new FormControl(''),
    });
  }
  onSubmitFilters() {
    console.log(this.formFilter.value);
  }
}
