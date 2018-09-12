import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase Demo';
  courses$: Observable<any[]>;
  courseskey$: Observable<any[]>;
  course$;
  author$;

  // courses: any;
  // subscription: Subscription;

  constructor(private db: AngularFireDatabase, private dbkey: AngularFireDatabase) {
    this.courseskey$ = dbkey.list('/courses').snapshotChanges();
    // this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    // console.log(this.author$);

    this.courses$ = db.list('/courses')
      .snapshotChanges()
      .pipe(map(items => {
        return items.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          console.log('data is ', data);
          console.log('key is ', key);
          return { key, data };           // or {key, ...data} in case data is Obj
        });
      }));

    // this.subscription = db.list('/courses').snapshotChanges().subscribe((courses) => {
    //   this.courses = courses;
    //   console.log(this.courses);
    //  });
  }

  update(course) {
    console.log('course.key is', course.key);
    console.log('course.data is', course.data);

    this.db.object('courses/' + course.key).update({
      title: course.data.title + ' Updated',
      price: 150
    });

    // this.dbkey.object('courses/' + course.$key).set(course.$value + ' UPDATED');
  }

  delete(course) {
    this.db.object('courses/' + course.key).remove().then(x => console.log('Object removed'));
  }

  add(course: HTMLInputElement) {
    // this.db.list('/courses').push(course.value);

    // Comples Object
    this.db.list('/courses').push({
      title: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Templates' }
      ]
    });

    course.value = '';
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
