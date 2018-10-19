import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-demo';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
     ngRedux.subscribe(() => {
       var store = ngRedux.getState();
       this.counter = store.counter;
     });
  }

  increment() {
    // console.log('Increment');
    this.ngRedux.dispatch( {type: INCREMENT});
  }
}
