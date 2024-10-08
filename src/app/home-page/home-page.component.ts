import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { StepsComponent } from '../steps/steps.component';
import { LatestReviewsComponent } from '../latest-reviews/latest-reviews.component';
import { TopMoviesComponent } from '../top-movies/top-movies.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    StepsComponent,
    LatestReviewsComponent,
    TopMoviesComponent,
    CallToActionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
