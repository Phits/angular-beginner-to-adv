import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-request-error'
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  updatePost(post) {
    // return  this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));

    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(catchError((error) => {
      return this.handleError(error);
    }) as any);

  }

  createPost(post) {
    // return this.http.post(this.url, JSON.stringify(post));
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error) => {
      return this.handleError(error);
    }) as any);
  }

  deletePost(id) {
    // return this.http.delete(this.url + '/' + id);
    return this.http.delete(this.url + '/' + id).pipe(catchError((error) => {
        return this.handleError(error);
    }) as any);
  }

  private handleError(error: Response) {
 
    if (error.status === 400)
      return throwError(new NotFoundError())

    if (error.status === 404)
      return throwError(new NotFoundError())

    return throwError(new AppError(error));
   
  }

}