import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categoryName: string | null = '';
  cards = [
    { id: '1', image: 'https://placehold.co/150x150', title: 'Financing for commercial trucks - (We handle all credit types) $0.00', content: 'Our company has specialized in heavy duty truck and construction equipment financing for the last 28 years. Competitive commercial truck and' },
    { id: '2', image: 'https://placehold.co/150x150', title: 'T1981 CAMARO $5,500/BES...', content: '327 MOTOR AUTOMATIC TILT WHEEL T ROOF AIR CONDITIONING NEEDS WIRING TO START CALL JAY AT 860-501-2166' },
    // Add more items as needed
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category');
  }
}