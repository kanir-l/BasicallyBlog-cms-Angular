import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockBlogService } from './mock-blog.service';

describe('MockBlogService', () => {
  let service: MockBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientModule ]
    });
    service = TestBed.inject(MockBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
