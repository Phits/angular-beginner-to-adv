import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase Demo';
  courses$: Observable<any[]>;
  course$;
  author$;

  // courses: any;
  // subscription: Subscription;

  constructor(public db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    // console.log(this.author$);

    // this.subscription = db.list('/courses').valueChanges().subscribe((courses) => {
    //   this.courses = courses;
    //   console.log(this.courses);
    //  });
  }

  add(course: HTMLInputElement) {
    this.db.list('/courses').push(course.value);
    course.value = '';
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
