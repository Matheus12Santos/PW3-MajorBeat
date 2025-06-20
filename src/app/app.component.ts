import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ContatoComponent } from "./contato/contato.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HomeComponent, SobreComponent, ContatoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW3-MajorBeat';
}
