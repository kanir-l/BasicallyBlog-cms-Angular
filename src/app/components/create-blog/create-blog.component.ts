
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  @Input() blogs: Blog[] = []
  title: string

  /* @Output() clickAdd = new EventEmitter<Blog[]>()
  handleAdd(): void {
    this.clickAdd.emit(this.blogs)
  }    */

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
  
  }

  inputTitle(inputItem: string): void {
    this.title = inputItem
  }

  createBlog(inputBlogTitle: string) {
    this.service.addBlog(inputBlogTitle).subscribe((newBlog: Blog)=>{
      this.blogs.push(newBlog)

      this.router.navigateByUrl('/create-blog')
    })
  }
}
