import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-flow');

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login("john@gmail.com", "john@123");
  }

  register() {
    this.authService.register("john@gmail.com", "john@123");
  }
}
