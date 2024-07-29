import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-reviews',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './latest-reviews.component.html',
  styleUrl: './latest-reviews.component.scss',
})
export class LatestReviewsComponent {}
