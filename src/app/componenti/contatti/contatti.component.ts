import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ProvaServiziService } from 'src/app/servizi/prova-servizi.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  gente: any
  uomo: any
  isProfile: boolean

  constructor(private servizioProva: ProvaServiziService, private route: ActivatedRoute, private router: Router, private firebase: FirebaseService) {}

  persone: any
  url = 'https://corso-angular-33cec-default-rtdb.firebaseio.com/persone'

  ngOnInit(): void {
    this.gente = this.servizioProva.gente;
    // prendere il parametro id tramite ActivatedRoute
    let id = this.route.snapshot.paramMap.get('id');
    this.isProfile = !id ? false : true
    console.log(id);

    if(id) {
      this.isProfile = true;
      this.uomo = this.gente[id];
    };

    // prendere i dati dal DB (get)
    this.firebase.getPersone(this.url + '.json').subscribe((data: any) => {
      // mapping, risincronizzare i dati per togliere ID di firebase, [array di oggetti]
      this.persone = Object.keys(data).map(key => {
        // aggiungere id al oggetto persone tramite [key]['NUOVO id']
        data[key]['id'] = key
        return data[key]
      }); // this.persone = data;
      console.log(this.persone)
      console.log(this.url)
    });
    
    
  }
}
