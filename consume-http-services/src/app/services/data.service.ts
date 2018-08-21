import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(response => response.json())).pipe(catchError((error) => {
                return this.handleError(error);
            }) as any);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
        .pipe(map(response => response.json())).pipe(catchError((error) => {
            return this.handleError(error);
        }));
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .pipe(map(response => response.json())).pipe(catchError((error) => {
            return this.handleError(error);
        }) as any);

    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
        .pipe(map(response => response.json())).pipe(catchError((error) => {
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