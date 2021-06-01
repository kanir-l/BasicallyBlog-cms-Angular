import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PrintBlogComponent } from './components/print-blog/print-blog.component';
import { IndexComponent } from './components/index/index.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { PrintPostComponent } from './components/print-post/print-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PrintCommentComponent } from './components/print-comment/print-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    PrintBlogComponent,
    IndexComponent,
    CreateBlogComponent,
    CreatePostComponent,
    PageNotFoundComponent,
    PostsComponent,
    PrintPostComponent,
    CommentsComponent,
    PrintCommentComponent,
    CreateCommentComponent,
    UpdateBlogComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
