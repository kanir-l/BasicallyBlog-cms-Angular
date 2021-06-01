import { Component, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = []
  blog: Blog

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs.reverse()
    })
  }

  removeBlog(blogId: number, blogIndex: number): void {
    this.service.deleteBlog(blogId).subscribe(() => {
      this.blogs.splice(blogIndex, 1)
    })
  }  
}
