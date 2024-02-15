import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
  
})
export class AdPageComponent {
  adId: string | null = '1';
  form!: FormGroup;
  formFilter!: FormGroup;
  wordCount = 0;
  selectedImage!: string;
  adData = {
    id: '1',
    title: 'BMW 535i $6500',
    subtitle: '2017 BMW X5 xDrive 75,000 Miles in excellent condition. ',
    description:
      'Our company has specialized in heavy duty truck and construction equipment financing for the last 28 years. Competitive commercial truck and construction equipment financing is available for all credit types, including startups. If you are seeking heavy duty truck or construction equipment financing, you should contact us. Our company will provide the best heavy duty truck and construction equipment financing terms available for your particular situation. There is no cost to determine if you qualify. All credit types are welcome to apply, including startups. We are a "one stop" shop for heavy duty truck and construction equipment financing. Feel free to contact us to discuss your particular heavy duty truck or construction equipment financing needs. We will provide the best heavy duty truck and construction equipment financing terms available for your particular situation. Our company does not sell construction equipment, we only provide construction equipment financing. (561)-212-2193 ',
    images: [
      'https://placehold.co/550x550',
      'https://placehold.co/530x530',
      'https://placehold.co/560x520',
      // add more image URLs as needed
    ],
  };

  isHandset: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.adId = this.route.snapshot.paramMap.get('adId');
    this.selectedImage = this.adData.images[0];
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
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

  changeImage(value: string) {
    const currentIndex = this.adData.images.indexOf(this.selectedImage);

    if (value === 'next') {
      const nextIndex = (currentIndex + 1) % this.adData.images.length;
      this.selectedImage = this.adData.images[nextIndex];
    } else if (value === 'previous') {
      const previousIndex =
        (currentIndex - 1 + this.adData.images.length) %
        this.adData.images.length;
      this.selectedImage = this.adData.images[previousIndex];
    } else {
      this.selectedImage = value;
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onSubmitFilters() {
    console.log(this.formFilter.value);
  }

  updateWordCount(event: any) {
    this.wordCount = event.target.value.split(' ').length;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      panelClass: 'my-custom-dialog-class',
      width: '500px',
      height: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
