import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.css'],
})
export class AnmeldenComponent {
  username: string;
  password: string;
  loggedIn = false

  constructor(private router: Router) {}


  login() {
    const validAdminUsername = 'admin';
    const validAdminPassword = '123';
    const validUsername = 'user';
    const validUserPassword = '123';


    if (!this.username || !this.password) {
      window.alert('Bitte fülle alle Felder aus!');
      return;
    }

    if ( (this.username === validUsername && this.password === validUserPassword)
    ) {
      alert('Login war erfolgreich!');
      this.router.navigate(['/']);
    } else if((this.username === validAdminUsername && this.password === validAdminPassword)) {
      alert('Login als Admin erfolgreich!');
      this.router.navigate(['/dashboard']); 
    }else{
      alert('Falscher Benutzername oder falsches Passwort eingegeben!');
    }
  }
}