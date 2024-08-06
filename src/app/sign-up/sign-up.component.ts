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
  noUserError = false;
  duplicateUserError = false;

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
        this.duplicateUserError = false;
        if (data.message == 'failed') {
          this.duplicateUserError = true;
        } else {
          localStorage.setItem('userInfo', data.userInfo[0]);
          window.location.href = '/all-reviews';
        }
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
        this.noUserError = false;
        if (data.message == 'User not found') {
          this.noUserError = true;
        } else {
          localStorage.setItem('userInfo', data.userInfo[0]);
          window.location.href = '/all-reviews';
        }
      })
    );
  }
}
