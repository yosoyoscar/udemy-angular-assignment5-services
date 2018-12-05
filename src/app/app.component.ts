import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers : string[] = [];
  inactiveUsers : string[] = [];

  constructor(private usersServices: UsersService) {}

  ngOnInit(){
    this.activeUsers = this.usersServices.activeUsers;
    this.inactiveUsers = this.usersServices.inactiveUsers;
  }
}