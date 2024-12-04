import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { NewUserData } from '../user/user.model';
@Injectable({ providedIn: 'root' })
export class UsersService {
  async addUser(userData: NewUserData) {
    console.log('add user started');
    const postData = await fetch('https://localhost:7103/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name:userData.name,
        email:userData.email
      }),
    }).then((response) => response.json());
    console.log(postData);
  }
}
