import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-print-post',
  templateUrl: './print-post.component.html',
  styleUrls: ['./print-post.component.scss']
})
export class PrintPostComponent implements OnInit {
  //id: number = 0
  @Input() post: Post

  @Output() clickRemove = new EventEmitter<Post>()
  handleRemove(): void {
    this.clickRemove.emit(this.post)
  } 

  imageBin: string = "../assets/img/garbage.svg"
  imageEdit: string = "../assets/img/edit.svg"

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   /*  this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
  }) */

}
}