import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaServiziService implements OnInit{
  
  gente = [
    {
      nome: 'Elio',
      cognome: 'Rossi',
    },
    {
      nome: 'Mario',
      cognome: 'Bianchi',
    },
    {
      nome: 'Franco',
      cognome: 'Verdi',
    },
  ]

  iscritti: any = [
    {
      nome: 'Andrea',
      cognome: 'Ceccarelli',
      descrizione: 'é un ragazzo moro'
    },
    {
      nome: 'Filippo',
      cognome: 'Mandorla',
      descrizione: 'é un ragazzo biondo'
    },
    {
      nome: 'Gianni',
      cognome: 'Marinelli',
      descrizione: 'é un ragazzo castano'
    },
    {
      nome: 'Alessio',
      cognome: 'Bistocchi',
      descrizione: 'é un ragazzo riccio'
    },
  ]

  constructor() { }
  ngOnInit(): void {
    
  }
}
