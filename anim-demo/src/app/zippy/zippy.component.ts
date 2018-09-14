import { expandCollapse } from './zippy.component.animations';
import { Component, Input } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ expandCollapse ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
