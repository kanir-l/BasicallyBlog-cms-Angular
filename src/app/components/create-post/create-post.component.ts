import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  posts: Post[] = []
  
  inputPostTitle: string = ""
  inputPostContent: string = ""

  id: number = 0

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    }) 
  }

  createPost(inputPostTitle: string, inputPostContent: string, id: number) {
    this.service.postPost(inputPostTitle, inputPostContent, id).subscribe((newPost: Post)=>{
      this.posts.push(newPost)
      
      this.router.navigateByUrl('/comments/Posts/' + newPost.id)
    })
  }
}

