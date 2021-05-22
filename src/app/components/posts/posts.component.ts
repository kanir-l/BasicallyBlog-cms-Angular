import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [] //Getting Post array
  blog: Blog //Getting just one blog sent from service

  id: number = 0
 
  constructor(private service: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    })

    this.service.getPosts(this.id).subscribe((blog) => {
      this.posts = blog.posts 
      // the posts array is = the posts in specific blog, which the id is gotten by the route paramMap and sent to service, the service is sending back the specific blog in the subsribe argument. ==>
      this.blog = blog
      // this blog variable = the specific blog data sent from service <==
    })
  }

  removePost(postId: number, postIndex: number): void {
    this.service.deletePost(postId).subscribe(() => {
      this.posts.splice(postIndex, 1)
    })
  }
}

