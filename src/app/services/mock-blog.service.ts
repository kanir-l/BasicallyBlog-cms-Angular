import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class MockBlogService {
  blogs: Blog[] = []

  testDataBlog: Blog[] = [
    {
      id: 123,
      title: "Blog Title",
      created: 12-12-12,
      userId: 123,
      posts: []
    }
  ]

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    const blogs = of(this.testDataBlog)
    return blogs
  }
}
