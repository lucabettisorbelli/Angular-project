import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProvaServiziService } from '../../servizi/prova-servizi.service';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.scss'],
})

// ngOnInit() è un metodo di Angular che fa parte del ciclo di vita dei componenti. Viene chiamato da Angular per indicare che ha terminato la creazione del componente.
// dovresti usare constructor() per configurare l’Iniezione di Dipendenza e non molto altro, ngOnInit() è il posto migliore per “iniziare” - è dove/quando vengono risolti i legami dei componenti.

export class EsempioComponent implements OnInit, AfterViewInit{

    constructor(public serviziProva: ProvaServiziService) {}

    // prendere il valore dell' input e salvarlo in una variabile!: ElementRef
    @ViewChild('inputSaluti') inputSaluti!: ElementRef 

    // il valore non può essere inizializzato ngOnInit ma va inizializzato dopo, con ngAfterInit
    ngAfterViewInit(): void {
        console.log(this.inputSaluti);
    }

    valore = "";
    prendiValue() {
      console.log(this.inputSaluti.nativeElement.value);
      this.valore = this.inputSaluti.nativeElement.value;
    }

    // con @input prendiamo l'array passato dal componente padre (app.component.ts)
    @Input() piante: any[] | undefined;

    squadra = [
      {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 25,
      },
      {
        nome: 'Gianni',
        cognome: 'Sperti',
        eta: 12,
      },
      {
        nome: 'Anna',
        cognome: 'Verdi',
        eta: 56,
      },
      {
        nome: 'Elia',
        cognome: 'Martino',
        eta: 10,
      },
    ]
    
    maggiorenni:any[] = [];

    mostraMaggiorenni() {
      this.maggiorenni = this.squadra.filter(persona => persona.eta > 18 );
    }

    // importo dal service l'array Gente, dichiarando nel costruttore (molto semplice)
    ngOnInit():void {
      console.log('Gente:', this.serviziProva.gente)
    }
  }

