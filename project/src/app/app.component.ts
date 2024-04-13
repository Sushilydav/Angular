import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from './components/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
  constructor(public dialog: MatDialog, private router: Router) {}

  openRegistrationDialog(): void {}
  ngOnInit() {
    this.router.navigateByUrl('/home');
  }
}
