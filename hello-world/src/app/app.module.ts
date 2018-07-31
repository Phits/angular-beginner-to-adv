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
import { TitleCasePipe } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleCaseCustomPipe } from './title-case-custom.pipe';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseCustomPipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CoursesService,
    AuthorService,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
