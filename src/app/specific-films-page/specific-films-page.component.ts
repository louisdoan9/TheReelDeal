import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

@Component({
  selector: 'app-specific-films-page',
  standalone: true,
  imports: [RouterModule, AccessDeniedComponent],
  templateUrl: './specific-films-page.component.html',
  styleUrl: './specific-films-page.component.scss',
})
export class SpecificFilmsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  Math = Math;
  localStorage = localStorage;
  Number = Number;
  filmID = '';
  filmInfo: {
    ID: string;
    Title: string;
    'Normalized Score': string;
    'Score Trend': string;
    'Film Categories': string[];
  } = {
    ID: '',
    Title: '',
    'Normalized Score': '0',
    'Score Trend': '0',
    'Film Categories': [],
  };

  constructor() {
    this.filmID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    fetch(
      'https://the-reel-deal-backend.vercel.app/films-detailed/' + this.filmID
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.filmInfo = data;
      });
  }
}
