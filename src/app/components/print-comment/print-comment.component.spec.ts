import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCommentComponent } from './print-comment.component';

describe('PrintCommentComponent', () => {
  let component: PrintCommentComponent;
  let fixture: ComponentFixture<PrintCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
