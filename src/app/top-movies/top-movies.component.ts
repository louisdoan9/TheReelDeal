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
  films: { ID: Number; Title: string; 'Normalized Score': Number }[] = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/films-partial/top')
      .then((response) => response.json())
      .then((data) => {
        this.films = data;
      });
  }
}
