import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FirebaseDatabase, FirebaseStorage } from 'angularfire2';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase Demo';
  courses$;
  course$;
  author$;

  // courses: any;
  // subscription: Subscription;

  constructor(db: AngularFireDatabase) {

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
    this.course$.set(course.value);
    course.value = '';
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
