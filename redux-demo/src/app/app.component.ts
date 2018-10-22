import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { INCREMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-demo';
  @select(s => s.get('counter')) count;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch( {type: INCREMENT});
  }
}
