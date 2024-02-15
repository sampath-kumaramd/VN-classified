import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDialogCategoryComponent } from './filter-dialog-category.component';

describe('FilterDialogCategoryComponent', () => {
  let component: FilterDialogCategoryComponent;
  let fixture: ComponentFixture<FilterDialogCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterDialogCategoryComponent]
    });
    fixture = TestBed.createComponent(FilterDialogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
