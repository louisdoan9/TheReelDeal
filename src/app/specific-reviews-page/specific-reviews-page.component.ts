import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

@Component({
  selector: 'app-specific-reviews-page',
  standalone: true,
  imports: [RouterModule, AccessDeniedComponent],
  templateUrl: './specific-reviews-page.component.html',
  styleUrl: './specific-reviews-page.component.scss',
})
export class SpecificReviewsPageComponent {
  localStorage = localStorage;
  route: ActivatedRoute = inject(ActivatedRoute);
  reviewID = '';
  reviewInfo: {
    ID: string;
    Title: string;
    Body: string;
    Date: string;
    Author: string;
    'Mentioned Films': {
      ID: number;
      Title: string;
      Score: number;
      Categories: string[];
    }[];
  } = {
    ID: '',
    Title: '',
    Body: '',
    Date: '',
    Author: '',
    'Mentioned Films': [],
  };
  relatedReviews: {
    ID: string;
    Title: string;
    Author: string;
    Date: string;
    'Matching Films': [];
  }[] = [];

  constructor() {
    this.reviewID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    fetch(
      'https://the-reel-deal-backend.vercel.app/reviews-detailed/' +
        this.reviewID
    )
      .then((response) => response.json())
      .then((data) => {
        this.reviewInfo = data;

        fetch(
          'https://the-reel-deal-backend.vercel.app/related-reviews/' +
            this.reviewID
        )
          .then((response) => response.json())
          .then((data) => {
            this.relatedReviews = data;
          });
      });
  }

  handleRedirect(id: string) {
    window.location.href = '/all-reviews/' + id;
  }
}
