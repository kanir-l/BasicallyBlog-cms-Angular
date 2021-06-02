import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] =[] //Geting Post array
  post: Post //Getting just one specific post sent from service

  id: number = 0

  constructor(private service: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    })

    this.service.getComments(this.id).subscribe((post) => {
      this.comments = post.comments.reverse()
      this.post = post
    })
  }

  addComment(comment: Comment): void {
    console.log('Ran');
    this.comments.push(comment)
  }

  removeComment(commentId: number, commentIndex: number): void {
    this.service.deleteComment(commentId).subscribe(() => {
      this.comments.splice(commentIndex, 1)
    })
  }
}
