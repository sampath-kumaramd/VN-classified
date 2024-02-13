import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdSuccessComponent } from './post-ad-success.component';

describe('PostAdSuccessComponent', () => {
  let component: PostAdSuccessComponent;
  let fixture: ComponentFixture<PostAdSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAdSuccessComponent]
    });
    fixture = TestBed.createComponent(PostAdSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
