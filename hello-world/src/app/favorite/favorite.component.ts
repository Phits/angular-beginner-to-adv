import { Component, Input, Output, EventEmitter } from '@angular/core';

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
