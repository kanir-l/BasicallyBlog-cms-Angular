import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {
  blogs: Blog[] = []
  blog: Blog

  id: number = 0

  constructor(private service: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'))
    })

    this.service.getSpecificBlog(this.id).subscribe((blog: Blog) => {
      this.blog = blog
    })
  }

  updateBlog(updateBlogTitle: string, blogId: number): void {
    this.service.putBlog(updateBlogTitle, blogId).subscribe(() => {
      this.router.navigateByUrl('/blogs')
    })
  }
}
