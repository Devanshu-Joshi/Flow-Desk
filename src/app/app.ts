import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from './core/services/auth';
import { Header } from './layouts/header/header';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-flow');

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
