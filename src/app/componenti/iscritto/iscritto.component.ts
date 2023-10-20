import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvaServiziService } from 'src/app/servizi/prova-servizi.service';

@Component({
  selector: 'app-iscritto',
  templateUrl: './iscritto.component.html',
  styleUrls: ['./iscritto.component.scss']
})
export class iscrittoComponent implements OnInit{
  id: number
  iscritto: any
  constructor(private route: ActivatedRoute, private servizioProva: ProvaServiziService) {}
  
  ngOnInit(): void {
    // snapshot, ogni volta che clicchiamo prende uno "screenshot" e prendiamo l'id
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // subscribe, ogni volta che clicchiamo una nuova "iscrizione" sulla stessa pagina
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id')!;
      this.iscritto = this.servizioProva.iscritti[this.id];
    })
  }
}
