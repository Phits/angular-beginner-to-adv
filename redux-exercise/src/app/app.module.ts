import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
