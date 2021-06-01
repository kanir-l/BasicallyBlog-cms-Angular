import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private blogs: Blog[] = []
  blog$ : Observable<Blog[]>
  private posts: Post[] = []
  posts$ : Observable<Post[]>
  private comments: Comment[]
  comments$ : Observable<Comment[]>

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<Post> {
    if(!localStorage.getItem('posts')){
      return this.http.get<Post>('https://mi-blogs.azurewebsites.net/api/Posts/' + postId)
    } 
    else {
      this.posts = JSON.parse(localStorage.getItem('posts'))
    }
  }

  postComment(content: string, postId: number): Observable<Comment> {
    return this.http.post<Comment>('https://mi-blogs.azurewebsites.net/api/Comments/', {content, postId})
  }

  deleteComment(commentId: number): Observable<Comment> {
    return this.http.delete<Comment>('https://mi-blogs.azurewebsites.net/api/Comments/'+ commentId)
  }
}
