import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsInPostComponent } from './components/comments-in-post/comments-in-post.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'posts/Blogs/:id', component: PostsComponent},
  { path: 'comments-in-post/Posts/:id', component: CommentsInPostComponent},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }