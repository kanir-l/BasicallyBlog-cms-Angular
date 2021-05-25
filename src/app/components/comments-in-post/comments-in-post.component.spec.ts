import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsInPostComponent } from './comments-in-post.component';

describe('CommentsInPostComponent', () => {
  let component: CommentsInPostComponent;
  let fixture: ComponentFixture<CommentsInPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsInPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsInPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
