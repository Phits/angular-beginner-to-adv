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
  posts: any[];

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.service.createPost(post).subscribe(response => {
      // post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
        alert('Bad Request Error.');
        console.log(error);
      } else throw error;
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log('Response is ', response);
    },
      (error: AppError) => {
        console.log('error: AppError', error);
        if (error instanceof NotFoundError)
          alert('This post does not exist at http://jsonplaceholder.typicode.com/posts ');
        else throw error;
      });
  }

  updatePost(post) {
    // this.http.put(this.url, JSON.stringify(post));
    this.service.updatePost(post).subscribe(response => {
      console.log(response.json());
    }, (error: Response) => {
      if (error.status === 400) {
        //  this.form.setErrors(error.json());
      }
    });
  }

}
