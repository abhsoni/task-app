import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users:any;
  selectedUserId ?:number;
  get selectedUser(){
    console.log("xxx");
    console.log(this.users);
    return this.users.find((user:any)=>user.userId===this.selectedUserId)!
  }
  constructor(private appService:AppService ){}
  ngOnInit(): void {
    this.appService.getUsersList().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
    console.log(this.users);
  }
  onSelectUser(id:number){
    this.selectedUserId=id;
    console.log("Selected User with ID: "+id);
    console.log(this.selectedUserId)
  }
  title = 'first-angular-app';
}
