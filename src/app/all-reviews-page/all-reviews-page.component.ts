import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

@Component({
  selector: 'app-all-reviews-page',
  standalone: true,
  imports: [RouterModule, AccessDeniedComponent],
  templateUrl: './all-reviews-page.component.html',
  styleUrl: './all-reviews-page.component.scss',
})
export class AllReviewsPageComponent {
  localStorage = localStorage;
  reviews: {
    ID: string;
    Title: string;
    Date: string;
    Author: string;
    'Mentioned Films': { ID: string; Title: string }[];
  }[] = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/reviews-partial')
      .then((response) => response.json())
      .then((data) => {
        this.reviews = data;
      });
  }
}
