import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private blogs: Blog[] = []
  blog$ : Observable<Blog[]>
  private posts: Post[] = []
  posts$ : Observable<Post[]>

  constructor(private http: HttpClient) { }

  getPosts(blogId: number): Observable<Blog> {
    if(!localStorage.getItem('blogs')){
      return this.http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId)
    } 
    else {
      this.blogs = JSON.parse(localStorage.getItem('blogs'))
    }
  }

  addPost(title: string, content: string, blogId: number): Observable<Post> {

    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/Posts/', {title, content, blogId, created: new Date()})
  }

  deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>('https://mi-blogs.azurewebsites.net/api/Posts/'+ postId)
  }

  getSpecificPost(postId: number): Observable<Post> {
    if(!localStorage.getItem('post')){
      return this.http.get<Post>('https://mi-blogs.azurewebsites.net/api/Posts/' + postId)
    } 
    else {
      this.posts = JSON.parse(localStorage.getItem('posts'))
    }
  }
}