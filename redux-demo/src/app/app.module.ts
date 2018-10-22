import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { fromJS, Map } from 'immutable';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INTIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
     ngRedux.configureStore(rootReducer, fromJS(INTIAL_STATE));
  }
 }
