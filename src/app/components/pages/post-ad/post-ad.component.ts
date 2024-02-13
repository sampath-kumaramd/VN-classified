import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss'],
})
export class PostAdComponent implements OnInit {
  postAdForm!: FormGroup;
  wordCount = 0;

  userData = {
    name: 'Alexandar Foldem',
    email: ' alex_123gmail.com',
    location: 'Preston, UK',
    phone: '+44 xxx XxXxx02',
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.postAdForm = this.formBuilder.group({
      category: [''],
      subCategory: [''],
      location: [''],
      title: [''],
      description: ['', [Validators.maxLength(2000)]],
      price: [''],
      photos: [''],
    });
  }

  updateWordCount(event: any): void {
    this.wordCount = event.target.value.split(' ').length;
  }
  onSubmit(): void {
    if (this.postAdForm.valid) {
      console.log(this.postAdForm.value);
      this.router.navigate(['/post-ad-success']);
    }
  }
}
