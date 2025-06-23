import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ContatoComponent } from "./contato/contato.component";
import { HeaderComponent } from "./header/header.component";
import { AgendaComponent } from "./agenda/agenda.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HomeComponent, SobreComponent, ContatoComponent, HeaderComponent, AgendaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW3-MajorBeat';
}
