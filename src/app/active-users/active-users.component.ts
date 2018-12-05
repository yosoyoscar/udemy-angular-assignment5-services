import { Component, OnInit} from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users : string[] = [];

  constructor(private usersServices: UsersService) {}

  ngOnInit(){
    this.users = this.usersServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersServices.setToInactive(id);
  }
}
