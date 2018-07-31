import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 post = {
   title: "Title",
   isFavorite: true
 }

 tweet = {
  likesCount: 0,
  isActive: false,
  bodyCopy: "Tweet text"
}

 onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
   console.log("Favorite changed!", eventArgs)
 }
}
