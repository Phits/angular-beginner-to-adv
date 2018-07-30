
import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    template: `

    <h2>Title Case Custom</h2>
    <input [(ngModel)]="titleCustom">
    {{titleCustom | titleCaseCustom}}

        <h2>Title Case</h2>
        <input [(ngModel)]="titleCase" (keyup)="transformTitle()">

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
    titleCase: string = 'enter a title';
    titleCustom: string;
    title = "List of Courses";
    courses;
    email = "john@fitz.com";
    text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis felis dignissim tempor ultrices. Nulla vulputate congue auctor. Nullam accumsan metus a imperdiet sollicitudin. Vestibulum finibus, risus at varius tincidunt, massa purus tempor purus, vitae consequat dolor felis at lectus. Donec vulputate, elit id egestas mollis, velit leo elementum metus, et pulvinar nibh orci at velit. Donec faucibus risus semper porta porta. Sed porttitor nisl porta arcu auctor aliquet.";

    constructor(service: CoursesService, private titlecasePipe:TitleCasePipe) {
        this.courses = service.getCourses();
    }

    ngOnInit() {
       this.transformTitle();
    }

    transformTitle() {
        console.log("transformTitle");
        this.titleCase = this.titlecasePipe.transform(this.titleCase);
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