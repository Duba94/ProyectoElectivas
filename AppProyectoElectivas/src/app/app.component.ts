import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electivas';
  
  public constructor(private router: Router) {
    this.router.navigate(["Administrador"]);
  }
}
