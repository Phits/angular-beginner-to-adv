import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isCollapsed: boolean = true;

  @Input('title') title;
  @Input('idContent') idContent;

  constructor() { }

  ngOnInit() {
  }

  toggle(whichID) {

    this.isCollapsed= !this.isCollapsed;
    
  }

}
