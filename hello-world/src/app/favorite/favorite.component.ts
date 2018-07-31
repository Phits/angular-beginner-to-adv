import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  title = 'app';
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  // farStar = ['far', 'star'];
  // fasStar = ['fas', 'star'];

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
