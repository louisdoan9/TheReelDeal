import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-specific-reviews-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './specific-reviews-page.component.html',
  styleUrl: './specific-reviews-page.component.scss',
})
export class SpecificReviewsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  reviewID = '';

  constructor() {
    this.reviewID = this.route.snapshot.params['id'];
  }
}
