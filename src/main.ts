import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { AgendaComponent } from './app/agenda/agenda.component';
import { SobreComponent } from './app/sobre/sobre.component';
import { ContatoComponent } from './app/contato/contato.component';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter([
      { path: '', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'agenda', component: AgendaComponent},
      { path: 'sobre', component: SobreComponent},
      { path: 'contato', component: ContatoComponent}      
    ])
  ]
});
