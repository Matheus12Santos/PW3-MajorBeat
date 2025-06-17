import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HomeComponent, SobreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW3-MajorBeat';
}
