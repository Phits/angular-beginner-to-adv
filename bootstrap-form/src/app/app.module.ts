import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CreateCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                          
    ReactiveFormsModule                       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
