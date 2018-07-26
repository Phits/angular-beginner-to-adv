
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `

        <p>{{text | summary:10}}</p>

        <input [value]="email" (keyup.enter)="onKeyUp()">
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">

        <div (click)="onDivClicked($event)"> 
             <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'grey'" class="btn btn-primary" [class.active]="isActive" >Save</button>
        </div>

        <h2>List of Courses</h2>
        <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
        </ul>
    `
})

export class CoursesComponent {
    isActive = false;
    title = "List of Courses";
    courses;
    email = "john@fitz.com";
    text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis felis dignissim tempor ultrices. Nulla vulputate congue auctor. Nullam accumsan metus a imperdiet sollicitudin. Vestibulum finibus, risus at varius tincidunt, massa purus tempor purus, vitae consequat dolor felis at lectus. Donec vulputate, elit id egestas mollis, velit leo elementum metus, et pulvinar nibh orci at velit. Donec faucibus risus semper porta porta. Sed porttitor nisl porta arcu auctor aliquet.";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log('Enter was pressed!', this.email);

        // Old Javascript way
        // if($event.keyCode === 13) {
        //     console.log('Enter!', $event);
        // }
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked!', $event);
    }

    onDivClicked($event) {
        console.log('Div was clicked!', $event);
    }

}