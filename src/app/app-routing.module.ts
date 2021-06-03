import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsComponent } from './components/comments/comments.component';
import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'posts/Blogs/:id', component: PostsComponent},
  { path: 'comments/Posts/:id', component: CommentsComponent},
  { path: 'edit/Blogs/:id', component: UpdateBlogComponent},
  { path: 'edit/Posts/:id', component: UpdatePostComponent},
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }