import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    PostService,
    GithubService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
