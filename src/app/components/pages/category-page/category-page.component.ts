import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Ad } from '../../shared/models/Ad';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { FilterDialogCategoryComponent } from './filter-dialog-category/filter-dialog-category.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  categoryName: string | null = '';

  Ads: Ad[] = [
    {
      id: '1',
      category: 'trucks',
      image: 'https://placehold.co/150x150',
      title:
        'Financing for commercial trucks - (We handle all credit types) $0.00',
      content:
        'Our company has specialized in heavy duty truck and construction equipment financing for the last 28 years. Competitive commercial truck and',
    },
    {
      id: '2',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: 'T1981 CAMARO $5,500/BES...',
      content:
        '327 MOTOR AUTOMATIC TILT WHEEL T ROOF AIR CONDITIONING NEEDS WIRING TO START CALL JAY AT 860-501-2166',
    },
    {
      id: '3',
      category: 'aircraft',
      image: 'https://placehold.co/150x150',
      title: 'Boeing 747 for sale',
      content: 'Used Boeing 747 in good condition. Contact for more details.',
    },
    {
      id: '4',
      category: 'automotive-items-parts',
      image: 'https://placehold.co/150x150',
      title: 'Car parts for sale',
      content: 'Various car parts available. Contact for more details.',
    },
    {
      id: '5',
      category: 'boats-watercraft',
      image: 'https://placehold.co/150x150',
      title: 'Yacht for sale',
      content: 'Luxury yacht in excellent condition. Contact for more details.',
    },
    {
      id: '6',
      category: 'accounting-bookkeeping-jobs',
      image: 'https://placehold.co/150x150',
      title: 'Accountant needed',
      content:
        'Looking for an experienced accountant. Contact for more details.',
    },
    {
      id: '7',
      category: 'business-opportunities',
      image: 'https://placehold.co/150x150',
      title: 'Business partnership opportunity',
      content:
        'Looking for a business partner for a new venture. Contact for more details.',
    },
    {
      id: '8',
      category: 'cleaning-jobs',
      image: 'https://placehold.co/150x150',
      title: 'Cleaning staff needed',
      content:
        'Looking for cleaning staff for office cleaning. Contact for more details.',
    },
    {
      id: '9',
      category: 'construction-work',
      image: 'https://placehold.co/150x150',
      title: 'Construction workers needed',
      content:
        'Looking for experienced construction workers. Contact for more details.',
    },
    {
      id: '10',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2010 Honda Civic $5,000',
      content: '2010 Honda Civic in good condition. Contact for more details.',
    },
    {
      id: '11',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2012 Toyota Corolla $6,500',
      content:
        '2012 Toyota Corolla in excellent condition. Contact for more details.',
    },
    {
      id: '12',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2015 Ford Mustang $15,000',
      content:
        '2015 Ford Mustang in excellent condition. Contact for more details.',
    },
    {
      id: '13',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2018 Tesla Model 3 $35,000',
      content:
        '2018 Tesla Model 3 in excellent condition. Contact for more details.',
    },

    {
      id: '14',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2008 BMW 3 Series $7,500',
      content: '2008 BMW 3 Series in good condition. Contact for more details.',
    },
    {
      id: '15',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2010 Mercedes-Benz C-Class $10,000',
      content:
        '2010 Mercedes-Benz C-Class in excellent condition. Contact for more details.',
    },
    {
      id: '16',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2013 Audi A4 $12,000',
      content: '2013 Audi A4 in excellent condition. Contact for more details.',
    },
    {
      id: '17',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2016 Chevrolet Camaro $20,000',
      content:
        '2016 Chevrolet Camaro in excellent condition. Contact for more details.',
    },
    {
      id: '18',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2019 Dodge Charger $25,000',
      content:
        '2019 Dodge Charger in excellent condition. Contact for more details.',
    },
    {
      id: '19',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2013 Audi A4 $12,000',
      content: '2013 Audi A4 in excellent condition. Contact for more details.',
    },
    {
      id: '20',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2016 Chevrolet Camaro $20,000',
      content:
        '2016 Chevrolet Camaro in excellent condition. Contact for more details.',
    },
    {
      id: '21',
      category: 'cars',
      image: 'https://placehold.co/150x150',
      title: '2019 Dodge Charger $25,000',
      content:
        '2019 Dodge Charger in excellent condition. Contact for more details.',
    },

    // Add more items as needed
  ];
  filteredAds: Ad[] = [];
  pagedAds: Ad[] = [];
  filterForm: FormGroup;

  isHandset: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(map((result) => result.matches));


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
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

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category');
    this.filterAds();
    this.handlePageEvent({
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredAds.length,
    });
  }

  filterAds(): void {
    if (this.categoryName) {
      this.filteredAds = this.Ads.filter(
        (ad) => ad.category === this.categoryName
      );
    } else {
      this.filteredAds = this.Ads;
    }
  }
  handlePageEvent(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.filteredAds.length) {
      endIndex = this.filteredAds.length;
    }

    this.pagedAds = this.filteredAds.slice(startIndex, endIndex);
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    // Apply the filters to your data
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogCategoryComponent, {
      panelClass: 'my-custom-dialog-class',
      width: '500px',
      height: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
