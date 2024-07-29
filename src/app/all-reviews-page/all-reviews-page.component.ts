import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-reviews-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-reviews-page.component.html',
  styleUrl: './all-reviews-page.component.scss',
})
export class AllReviewsPageComponent {
  reviews = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/article')
      .then((response) => response.json())
      .then((data) => {
        this.reviews = data;
      });
  }
}
