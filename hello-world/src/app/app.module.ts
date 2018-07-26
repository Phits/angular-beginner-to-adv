import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
