import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  posts: Post[] = []
  post: Post
  blog: Blog

  id: number = 0

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    })

    this.service.getSpecificPost(this.id).subscribe((post: Post) => {
      this.post = post
    })
  }

  updatePost(updatePostTitle: string, updatePostContent: string, postId: number, blogId: number): void {
    this.service.putPost(updatePostTitle, updatePostContent, postId, blogId).subscribe(() => {
      this.router.navigateByUrl('posts/Blogs/' + blogId)
    })
  }
}
