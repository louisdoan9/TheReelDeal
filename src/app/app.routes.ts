import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AllReviewsPageComponent } from './all-reviews-page/all-reviews-page.component';
import { SpecificReviewsPageComponent } from './specific-reviews-page/specific-reviews-page.component';
import { AllFilmsPageComponent } from './all-films-page/all-films-page.component';
import { SpecificFilmsPageComponent } from './specific-films-page/specific-films-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'all-reviews', component: AllReviewsPageComponent },
  { path: 'all-reviews/:id', component: SpecificReviewsPageComponent },
  { path: 'all-films', component: AllFilmsPageComponent },
  { path: 'all-films/:id', component: SpecificFilmsPageComponent },
];
