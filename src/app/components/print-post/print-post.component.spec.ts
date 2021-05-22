import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPostComponent } from './print-post.component';

describe('PrintPostComponent', () => {
  let component: PrintPostComponent;
  let fixture: ComponentFixture<PrintPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
