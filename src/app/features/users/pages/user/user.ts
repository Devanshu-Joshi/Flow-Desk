import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { UserTable } from '@features/users/components/user-table/user-table';
import { UserModel } from '@core/models/UserModel';
import { Sidebar } from '@features/users/components/sidebar/sidebar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [UserTable, Sidebar],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  users$!: Observable<UserModel[] | null>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsersByParent();
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
