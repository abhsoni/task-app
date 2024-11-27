import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const index = Math.floor(Math.round(DUMMY_USERS.length*Math.random()));
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input({required:true}) id!:string;
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/'+this.user.email
  }
  onSelectUser(){
    this.select.emit(this.user.userId);
    console.log("Clicked!!!!");
  }
}
