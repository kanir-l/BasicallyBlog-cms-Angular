import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @Input() posts: Post[] = []
  title: string
  content: string

  id: number = 0

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    }) 
  }

  inputTitle(inputItem: string): void {
    this.title = inputItem
  }

  inputContent(inputItem: string): void {
    this.content = inputItem
  }

  createPost(inputPostTitle: string, inputPostContent: string, id: number) {
    this.service.addPost(inputPostTitle, inputPostContent, id).subscribe((newPost: Post)=>{
      this.posts.push(newPost)

      this.router.navigateByUrl('posts/Blogs/' + this.id)
    })
  }
}

