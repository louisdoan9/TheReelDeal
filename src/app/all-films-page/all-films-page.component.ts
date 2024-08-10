import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

@Component({
  selector: 'app-all-films-page',
  standalone: true,
  imports: [RouterModule, AccessDeniedComponent],
  templateUrl: './all-films-page.component.html',
  styleUrl: './all-films-page.component.scss',
})
export class AllFilmsPageComponent {
  Math = Math;
  localStorage = localStorage;
  films: { ID: Number; Title: string; 'Normalized Score': Number }[] = [];

  ngOnInit() {
    fetch('https://the-reel-deal-backend.vercel.app/films-partial')
      .then((response) => response.json())
      .then((data) => {
        this.films = data;
        console.log(data);
      });
  }
}
