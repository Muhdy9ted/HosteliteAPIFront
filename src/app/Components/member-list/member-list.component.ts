import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user.model';
import { UserService } from 'src/app/Shared/Services/user.service';
import { AlertifyService } from 'src/app/Shared/Services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
    // this.keys = Object.keys(this.users);
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(JSON.stringify(users));
      this.users = users;
      console.log(this.users);
      console.log(this.users[0]);
      // users.forEach(element => {
      //    console.log(element);
      // });
    }, error => {
      console.log(error);
      this.alertify.error( error);
    });
  }
}
