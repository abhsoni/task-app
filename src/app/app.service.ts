import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AppService {
  getUsersList(): Observable<any[]> {
    return from(
      fetch(`https://localhost:7103/api/user`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.users);
          return data?.users;
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
          return [];
        })
    );
  }
}
