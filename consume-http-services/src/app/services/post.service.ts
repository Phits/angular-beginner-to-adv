import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-request-error'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts() {
   return this.http.get(this.url);
  }

  createPost(post) {
    // return this.http.post(this.url, JSON.stringify(post));
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error) => {
      console.log('error.status', error);
      if(error.status === 400) {
        return throwError(new BadRequestError(error.json()))
      }  else {
        return throwError(new AppError(error.json()));
        // return of(error);
      }
    }) as any);
  }

  deletePost(id) {
    // return this.http.delete(this.url + '/' + id);
    return this.http.delete(this.url + '/' + id).pipe(catchError((error) => {
      //intercept the respons error and displace it to the console
      console.log('error.status', error);
      if(error.status === 404) {
        return throwError(new NotFoundError())
      } else {
        return throwError(new AppError(error));
        // return of(error);
      }
    }) as any);
  }

  updatePost(post) {
    return  this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

}