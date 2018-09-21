import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;
  timer;
  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.getCourses()
    .subscribe(x => this.isLoading = false);

    this.timer = setInterval(() => {
     this.progress++;
     if (this.progress === 100) {clearInterval(this.timer)}
    }, 20);
  }

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' }
  ];

  title = 'Material Demo';
  isChecked = true;
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  color = 1;

  minDate = new Date(2018, 1, 1);
  maxDate = new Date(2019, 1, 1);

  getCourses() {
    return timer(2000);
  }

  selectCategory(category) {
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  onChange($event) {
    console.log($event);
  }

}
