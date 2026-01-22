import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { UserService } from '@core/services/user';
import { UserTable } from '@features/users/components/user-table/user-table';
import { UserModel } from '@core/models/User';
import { Sidebar } from '@features/users/components/sidebar/sidebar';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';

@Component({
  selector: 'app-user',
  imports: [UserTable, Sidebar, LoadingOverlay],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  isLoading = signal<boolean>(false);

  users = signal<UserModel[]>([]);

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading.set(true);
    this.userService.getUsersByParent().subscribe({
      next: (data) => {
        this.users.set(data);
        console.log(this.users());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err)
        this.isLoading.set(false);
      }
    });
  }

  @ViewChild('sidebar') sidebar!: Sidebar;

  onAddUser() {
    this.sidebar.openAdd();
  }

  onViewUser(user: UserModel) {
    this.sidebar.openView(user);
  }

  onEditUser(user: UserModel) {
    this.sidebar.openEdit(user);
  }

  onDeleteUser(user: UserModel) {
    this.sidebar.openDelete(user);
  }

}
