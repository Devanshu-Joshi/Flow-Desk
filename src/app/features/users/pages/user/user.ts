import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { UserService } from '@core/services/user';
import { UserTable } from '@features/users/components/user-table/user-table';
import { UserModel } from '@core/models/User';
import { Sidebar } from '@features/users/components/sidebar/sidebar';

@Component({
  selector: 'app-user',
  imports: [UserTable, Sidebar],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  users = signal<UserModel[]>([]);

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsersByParent().subscribe({
      next: (data) => {
        this.users.set(data);
        console.log(this.users());
      },
      error: (err) => console.error(err)
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
