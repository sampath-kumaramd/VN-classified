import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    // const user = localStorage.getItem('user');
    // // this.cd.detectChanges(); // manually trigger change detection
    // return user;
  }

  navigateToEditUser() {
    this.router.navigate(['edit-user/1']);
  }
}
