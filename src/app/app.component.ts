import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { LatestReviewsComponent } from './latest-reviews/latest-reviews.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    LatestReviewsComponent,
    CallToActionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TheReelDeal';

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/article')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
