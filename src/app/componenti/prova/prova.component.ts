import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProvaServiziService } from '../../servizi/prova-servizi.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent implements ElementRef, AfterViewInit, OnInit{
  constructor(private elementRef: ElementRef, public servizioProva: ProvaServiziService) {}
  // importo dal service l'array Gente, dichiarando nel costruttore (molto semplice)
  ngOnInit(): void {
    console.log('gentaglia', this.servizioProva.gente)
  }
  nativeElement: any;



  // con @input prendiamo l'array passato dal componente padre (app.component.ts)
  @Input() piante: any[] | undefined;

  data = [
    {
      nome: 'Luca',
      cognome: 'Betti',
    },
    {
      nome: 'Anna',
      cognome: 'Brutti',
    }
  ];

  isDisable = false;
  immagine1 = 'https://th.bing.com/th/id/OIP.fJzhm8Tkq8gbCMdCVd6zowHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  currentimage = this.immagine1;

  cani = [
    {
      nome: 'jago',
      razza: 'Yorkshire',
      descrizione: 'è un cane molto bello',
      isOnline: true,
    },
    {
      nome: 'pippo',
      razza: 'pitbull',
      descrizione: 'è un cane molto brutto',
      isOnline: false,
    },
    {
      nome: 'ciccio',
      razza: 'bastardino',
      descrizione: 'è un cane molto basso',
      isOnline: true,
    },
  ] 
  title = 'Angular';
  isVisible = true;
  
  numeri: number[] = [1,2,3,4];
  numero: number = this.numeri[0];
  index: number = 0;

  addNumber() {
    this.numero = this.numeri[this.index];
    this.index = (this.index + 1) % this.numeri.length;
  }

  changeStatus() {
    this.isVisible = !this.isVisible;
  }
  
  onButtonClick(e: any): void {
    console.log(e)
    this.title = 'Luca'
    if (this.currentimage === this.immagine1) {
      this.currentimage = this.immagine2;
    } else {
      this.currentimage = this.immagine1;
    }
  }

  onInput(event: Event){
    // prendiamo il valore dell'input tramite 2 way binding e lo salviamo in this.title tramite HTMLInputElement
    this.title = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  @ViewChild('prendimi') prendimi!:ElementRef

  ngAfterViewInit(): void {
    console.log(this.prendimi)
  }

  colore = '';

  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore;
  }

  preso = "";
  prendimelo() {
    console.log(this.prendimi.nativeElement.value)
    this.preso = this.prendimi.nativeElement.value
  }

}

class Mamma {
  constructor(public nome: string, public cognome: string, public eta: number) {}
}

let mamma = new Mamma('emanuela', 'stefanelli', 67);
console.log(mamma)

// class Mamma {
//   nome: string;
//   cognome: string;
//   eta: number;

//   constructor(nome: string, cognome: string, eta: number) {
//     this.nome = nome;
//     this.cognome = cognome;
//     this.eta = eta;
//   }
// }

// let mamma = new Mamma('emanuela', 'stefanelli', 67);





