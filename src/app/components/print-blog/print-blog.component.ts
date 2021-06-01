import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-print-blog',
  templateUrl: './print-blog.component.html',
  styleUrls: ['./print-blog.component.scss']
})
export class PrintBlogComponent implements OnInit {
  @Input() blog: Blog

  @Output() clickRemove = new EventEmitter<Blog>()
  handleRemove(): void {
    this.clickRemove.emit(this.blog)
  } 

  imageBin: string = "../assets/img/garbage.svg"
  imageEdit: string = "../assets/img/edit.svg"

  constructor(private service: BlogService) { }

  ngOnInit(): void { }

}
