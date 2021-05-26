
import { Location } from '@angular/common';
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

  constructor(private service: BlogService, private router: Router, private locations: Location) { }

  ngOnInit(): void {
  
  }

  createBlog(inputBlogTitle: string) {
    this.service.addBlog(inputBlogTitle).subscribe((newBlog: Blog)=>{
      this.blogs.push(newBlog)
  
      this.router.navigateByUrl('/blogs')
    })
  }
}
