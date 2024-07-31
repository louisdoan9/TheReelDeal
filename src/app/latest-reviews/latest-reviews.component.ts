import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-reviews',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './latest-reviews.component.html',
  styleUrl: './latest-reviews.component.scss',
})
export class LatestReviewsComponent {
  reviews: {
    ID: string;
    Title: string;
    Date: string;
    Author: string;
    'Mentioned Films': { ID: string; Title: string }[];
  }[] = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/reviews-partial/latest')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.reviews = data;
      });
  }
}
