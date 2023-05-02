import { Component } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent{
  name: string;
  vorname:string;
  email: string;
  message: string;


  submitForm() {
    if (!this.name || !this.email || !this.message|| !this.vorname) {
    alert('Bitte füllen Sie alle Felder aus.');
    return;
    };

  
    this.name = '';
    this.vorname='';
    this.email = '';
    this.message = '';

    alert('Formular erfolgreich gesendet!');
  }

  constructor() { }

  

}