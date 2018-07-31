import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('bodyCopy') bodyCopy: string;
  @Input('isActive') isActive: boolean;
  @Input('likeCounts') likeCounts: number;

  onClick() {
    if (this.isActive) {
      this.likeCounts = --this.likeCounts;
    } else {
      this.likeCounts = ++this.likeCounts;
    }
    this.isActive = !this.isActive;
  }
}