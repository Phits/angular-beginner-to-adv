import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material Demo';
  isChecked = true;
  colors = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Blue'}
  ];

  color = 1;

  minDate = new Date(2018, 1, 1);
  maxDate = new Date(2019, 1, 1);

  onChange($event) {
    console.log($event);
  }

}
