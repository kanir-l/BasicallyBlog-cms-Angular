import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-print-post',
  templateUrl: './print-post.component.html',
  styleUrls: ['./print-post.component.scss']
})
export class PrintPostComponent implements OnInit {
  @Input() post: Post
  @Input() blog: Blog

  id: number = 0

  @Output() clickRemove = new EventEmitter<Post>()
  handleRemove(): void {
    this.clickRemove.emit(this.post)
  }

  imageBin: string = "../assets/img/garbage.svg"
  imageEdit: string = "../assets/img/edit.svg"

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    })
  }
}