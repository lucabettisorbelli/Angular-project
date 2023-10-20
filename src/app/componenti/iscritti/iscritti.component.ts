import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ProvaServiziService } from 'src/app/servizi/prova-servizi.service';

@Component({
  selector: 'app-iscritti',
  templateUrl: './iscritti.component.html',
  styleUrls: ['./iscritti.component.scss']
})
export class iscrittiComponent implements OnInit {

  // prendere il valore del form e trasferirlo in typescript
  // @ViewChild('homeform') homeform: NgForm

  activeForm: FormGroup
  url = 'https://corso-angular-33cec-default-rtdb.firebaseio.com/persone';

  iscritti: any

  constructor(private servizioProva: ProvaServiziService, private firebase: FirebaseService ) {}
  ngOnInit(): void {
      this.iscritti = this.servizioProva.iscritti;
      console.log(this.iscritti);

      this.activeForm = new FormGroup({
        nome: new FormControl('Luca', [Validators.required, Validators.minLength(4)]),
        email: new FormControl(null, [Validators.required, Validators.email,]),
        colore: new FormControl()
      });

  };

  onSubmit(form: NgForm) {
    console.log(form);
  };

  onActiveSubmit() {
    console.log(this.activeForm.value);
    // inserire dati nel DB
    this.firebase.insertPersona(
      this.url + '.json',
      {nome: this.activeForm.value.nome, email: this.activeForm.value.email}
      ).subscribe(data => {
      console.log('Url è:', this.url)
      console.log('Dati', data);
    })
  };

  onDeletePersona(id: string) {
    this.firebase.deletePersona(this.url, id).subscribe(data => {
      console.log(data);
    })
  }
}
