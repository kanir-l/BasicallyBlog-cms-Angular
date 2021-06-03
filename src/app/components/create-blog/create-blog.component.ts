import { Component, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  blogs: Blog[] = []

  inputBlogTitle : string = ""

  constructor(private service: BlogService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(val => {
      this.service.getBlogs().subscribe((blogs: Blog[]) => {
        this.blogs = blogs.reverse()
      })
    })
   }

  ngOnInit(): void { }

  createBlog(inputBlogTitle: string) {
    this.service.postBlog(inputBlogTitle).subscribe((newBlog: Blog)=>{
      this.blogs.push(newBlog)

      this.router.navigateByUrl('/posts/Blogs/' + newBlog.id)
    })
  }
}
