import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBlogComponent } from './print-blog.component';

describe('PrintBlogComponent', () => {
  let component: PrintBlogComponent;
  let fixture: ComponentFixture<PrintBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
