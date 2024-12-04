import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../user-page.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userName="";
  userEmail=""
  private usersService = inject(UsersService);
  async onSubmit() {
    console.log("Submit clicked!!!");
    console.log(this.userName);
    console.log(this.userEmail);
    await this.usersService.addUser({
      name:this.userName,
      email:this.userEmail
    });
  }
}
