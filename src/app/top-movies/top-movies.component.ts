import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-movies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.scss',
})
export class TopMoviesComponent {
  Math = Math;
  films = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/films-partial/latest')
      .then((response) => response.json())
      .then((data) => {
        this.films = data;
      });
  }
}
