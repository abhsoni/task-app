import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { AppService } from './app.service';
=======
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';

>>>>>>> master

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
=======
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,CommonModule, RouterOutlet, RouterLink, RouterLinkActive,UserPageComponent],
>>>>>>> master
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  
>>>>>>> master
  title = 'first-angular-app';
}
