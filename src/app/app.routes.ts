import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllReviewsPageComponent } from './all-reviews-page/all-reviews-page.component';
import { SpecificReviewsPageComponent } from './specific-reviews-page/specific-reviews-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'all-reviews', component: AllReviewsPageComponent },
  { path: 'all-reviews/:id', component: SpecificReviewsPageComponent },
];
