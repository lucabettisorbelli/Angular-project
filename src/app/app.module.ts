import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './componenti/prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EsempioComponent } from './componenti/esempio/esempio.component';
import { HighlightDirective } from './direttive/highlight.directive';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { iscrittiComponent } from './componenti/iscritti/iscritti.component';
import { iscrittoComponent } from './componenti/iscritto/iscritto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    EsempioComponent,
    HighlightDirective,
    HomeComponent,
    ContattiComponent,
    iscrittiComponent,
    iscrittoComponent,
    NotfoundComponent,
    RegistrazioneComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
