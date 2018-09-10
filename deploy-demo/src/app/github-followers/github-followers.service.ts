import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { throwError, Observable } from 'rxjs';


@Injectable()
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/phits/followers';

  constructor(private http: Http) { }

  getFollowers() {
    return this.http.get(this._url)
      .pipe(map(response => response.json())).pipe(catchError((error) => {
        return this.handleError(error);
      }));

    // return this.http.get(this._url).pipe(switchMap(response => response.json()));
  }

  private handleError(error: Response) {

    if (error.status === 400)
      return throwError(new NotFoundError())

    if (error.status === 404)
      return throwError(new NotFoundError())

    return throwError(new AppError(error));

  }
}
