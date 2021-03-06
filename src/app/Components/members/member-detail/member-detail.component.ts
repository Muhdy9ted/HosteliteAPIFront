import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user.model';
import { UserService } from 'src/app/Shared/Services/user.service';
import { AlertifyService } from 'src/app/Shared/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params.id).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }
}
