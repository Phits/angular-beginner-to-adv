import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-request-error'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
 
  }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts);

    // console.log("posts is ", this.posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(newPost => {
      post['id'] = newPost.id;
      // console.log("post is", post);
    },
      (error: AppError) => {
        console.log("AppError!");
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          // alert('Bad Request Error.');
          // console.log(error);
        } else throw error;
      });
  }

  updatePost(post) {
    // this.http.put(this.url, JSON.stringify(post));
    this.service.update(post).subscribe(posts => {
      // console.log(response);
    }, (error: Response) => {
      if (error.status === 400) {
        //  this.form.setErrors(error.json());
      }
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert('This post does not exist at http://jsonplaceholder.typicode.com/posts ');
        else throw error;
      });
  }

}
