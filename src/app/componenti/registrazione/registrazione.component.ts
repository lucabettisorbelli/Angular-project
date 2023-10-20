import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servizi/auth/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit{

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
  }
  
  onRegisterSubmit(form: NgForm) {
    const email = form.value.email;
    const nome = form.value.nome;
    const cognome = form.value.cognome;
    const password = form.value.password;
    this.authservice.signUp({email: email, password: password, cognome: cognome, nome: nome, returnSecureToken: true}).subscribe(data => {
      console.log(data);
    })
    form.reset();
  }
}
