import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments-in-post',
  templateUrl: './comments-in-post.component.html',
  styleUrls: ['./comments-in-post.component.scss']
})
export class CommentsInPostComponent implements OnInit {
  @Input() post: Post
 
  id: number = 0

  constructor(private service: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
      console.log(this.id)
    })

    this.service.getSpecificPost(this.id).subscribe((post) => {
      this.post = post
    }
  )}
}
