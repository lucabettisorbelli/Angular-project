import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  

  title = 'Angular-project';
  piante = [
    {
      nome: 'Rosa',
      luogoDiProvenienza: 'Francia',
    },
    {
      nome: 'Girasole',
      luogoDiProvenienza: 'Italia',
    },
    {
      nome: 'Sakura',
      luogoDiProvenienza: 'Giappone',
    }
  ];


  
}
