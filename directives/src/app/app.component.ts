import { Component } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Fitz'
    }
  }
  canSave = true;
  viewMode = '';
  title = 'Directives';
  courses;

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  loadCourses() {
    this.courses =[
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' }
    ];
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'Course 4' });
  }

  onChange(course) {
    course.name = 'Updated Name'
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
