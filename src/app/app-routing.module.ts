import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ProvaComponent } from './componenti/prova/prova.component';
import { EsempioComponent } from './componenti/esempio/esempio.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { iscrittiComponent } from './componenti/iscritti/iscritti.component';
import { iscrittoComponent } from './componenti/iscritto/iscritto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/homepage'},
  {path: 'homepage', component: HomeComponent},
  {path: 'prova', component: ProvaComponent},
  {path: 'esempio', component: EsempioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrati', component: RegistrazioneComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'contatti/:id', component: ContattiComponent},
  {path: 'iscritti', component: iscrittiComponent, children: [
    {path:":id", component: iscrittoComponent}
  ]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
