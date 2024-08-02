import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-films-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-films-page.component.html',
  styleUrl: './all-films-page.component.scss',
})
export class AllFilmsPageComponent {
  Math = Math;
  films = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/films-partial')
      .then((response) => response.json())
      .then((data) => {
        this.films = data;
        console.log(data);
      });
  }
}
