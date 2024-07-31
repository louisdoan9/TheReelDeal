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
  reviewInfo: {
    ID: string;
    Title: string;
    Date: string;
    Author: string;
    'Mentioned Films': { ID: string; Title: string }[];
  } = { ID: '', Title: '', Date: '', Author: '', 'Mentioned Films': [] };

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
        console.log(data);
      });
  }
}
