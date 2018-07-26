import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  title = 'app';
  favorited: boolean = false;
  // farStar = ['far', 'star'];
  // fasStar = ['fas', 'star'];

  constructor() { }

  ngOnInit() {
  }

}
