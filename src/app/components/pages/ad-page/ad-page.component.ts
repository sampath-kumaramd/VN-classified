import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent {
  adId: string | null = '1';

  selectedImage!: string;
  adData = {
    id: '1',
    title: 'BMW 535i $6500',
    content: 'Our company has specialized in heavy duty truck and construction equipment financing for the last 28 years. Competitive commercial truck and',
    images: [
      'https://placehold.co/550x550',
      'https://placehold.co/530x530',
      'https://placehold.co/560x520',
      // add more image URLs as needed
    ],
  };
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.adId = this.route.snapshot.paramMap.get('adId');
    this.selectedImage = this.adData.images[0];
  }

  changeImage(value: string) {
    const currentIndex = this.adData.images.indexOf(this.selectedImage);
  
    if (value === 'next') {
      const nextIndex = (currentIndex + 1) % this.adData.images.length;
      this.selectedImage = this.adData.images[nextIndex];
    } else if (value === 'previous') {
      const previousIndex =
        (currentIndex - 1 + this.adData.images.length) % this.adData.images.length;
      this.selectedImage = this.adData.images[previousIndex];
    } else {
      this.selectedImage = value;
    }
  }
}
