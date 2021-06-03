import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  //comments: Comment[] = [] //Output with the function sent with new comment, and push with another function in the comment component instead//
  @Output() addedComment = new EventEmitter<Comment>();

  inputCommentText: string = ""

  id: number = 0

  constructor(private service: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    }) 
  }

  createComment(inputCommentText: string, id: number){
    this.service.postComment(inputCommentText, id).subscribe((newComment: Comment) => {
      // this.comments.push(newComment) //Moved to comment component where view the comments instead// 
      this.addedComment.emit(newComment);
    })
  }
}
