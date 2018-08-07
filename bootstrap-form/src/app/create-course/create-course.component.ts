import { Component } from '@angular/core';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  categories = [
    { id: 1, name: 'Augmented Reality' },
    { id: 2, name: '3D Printing' },
    { id: 3, name: 'App Development' }
  ];

  create(f) {
    console.log(f);
  }

}
