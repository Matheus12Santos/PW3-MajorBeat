import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorVisib = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({      
      email: ['', [Validators.required, Validators.email]], // O campo deve ter um formato de e-mail válido (ex: usuario@dominio.com).
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      //Acessar a Home
      alert("Formulário válido!");
    }
  }

  Logar(){
    this.router.navigate(['/home']);
  }
}
