import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/Comment';


@Component({
  selector: 'app-print-comment',
  templateUrl: './print-comment.component.html',
  styleUrls: ['./print-comment.component.scss']
})
export class PrintCommentComponent implements OnInit {
  @Input() comment: Comment

  @Output() clickRemove = new EventEmitter<Comment>()
  handleRemove(): void {
    this.clickRemove.emit(this.comment)
  } 

  imageBin: string = "../assets/img/garbage.svg"
  imageEdit: string = "../assets/img/edit.svg"

  constructor() { }

  ngOnInit(): void { }
}
