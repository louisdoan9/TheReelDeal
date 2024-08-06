import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  display = 'sign-up';

  changeDisplay() {
    if (this.display === 'sign-in') {
      this.display = 'sign-up';
    } else {
      this.display = 'sign-in';
    }
  }

  createUser(event: Event) {
    event.preventDefault();

    const username = (<HTMLInputElement>(
      document.getElementById('signup-username')
    )).value;
    const password = (<HTMLInputElement>(
      document.getElementById('signup-password')
    )).value;
    const real_name = (<HTMLInputElement>(
      document.getElementById('signup-real-name')
    )).value;

    fetch('https://the-reel-deal-backend.vercel.app/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        pwdhash: password,
        rname: real_name,
      }),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  }

  getUser(event: Event) {
    event.preventDefault();

    const username = (<HTMLInputElement>(
      document.getElementById('signin-username')
    )).value;
    const password = (<HTMLInputElement>(
      document.getElementById('signin-password')
    )).value;

    fetch('https://the-reel-deal-backend.vercel.app/get-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        pwdhash: password,
      }),
    }).then((res) =>
      res.json().then((data) => {
        localStorage.setItem('userInfo', data.userInfo[0]);
      })
    );
  }
}
