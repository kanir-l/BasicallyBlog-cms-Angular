import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = []
  blogs$ : Observable<Blog[]>

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    const userId = 9860

    if(!localStorage.getItem('blogs')){
      return this.http.get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId)
    } 
    else {
      this.blogs = JSON.parse(localStorage.getItem('blogs'))
    }
  }
  
  addBlog(title: string): Observable<Blog> {
    const userId = 9860

    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', {title, userId})
  }

  deleteBlog(blogId: number): Observable<Blog> {
    return this.http.delete<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/'+ blogId)
  } 
}
