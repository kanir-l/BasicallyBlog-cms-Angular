import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  @Input() comments: Comment[] = []

  id: number = 0

  constructor(private service: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    }) 
  }

  createComment(inputCommentText: string, id: number){
    this.service.postComment(inputCommentText, id).subscribe((newComment: Comment) => {
      this.comments.push(newComment)
      console.log(newComment)
    })
  }
}
