import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent {
  adId: string | null = '1';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.adId = this.route.snapshot.paramMap.get('adId');
  }
}
