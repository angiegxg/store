import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  onStarClick(rating: number): void {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }
}
