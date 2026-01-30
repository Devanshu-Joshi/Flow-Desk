import { Component, ElementRef, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@layouts/header/header';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NgxDaterangepickerMd, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('task-flow');
  selected: any = { startDate: null, endDate: null };

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    const toastData = localStorage.getItem('postReloadToast');

    if (toastData) {
      const { type, title, message } = JSON.parse(toastData);

      if (type === 'warn') {
        this.toastr.warning(message, title);
      }
      localStorage.removeItem('postReloadToast');
    }
  }
}
