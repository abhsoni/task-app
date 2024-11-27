import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { Observable, from } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class TasksService {
  // getUserTasks(userId: string) {
  //   // const fetchTasksData = fetch(`https://localhost:7103/api/task`).then((response)=>response.json());

  //   const fetchUserTasks=fetch(`https://localhost:7103/api/task/${userId}`).then((response)=>{
  //     console.log(response);
  //     return response.json();
  //   });
  //   // return fetchUserTasks;
  //   // console.log(fetchUserTasks);

  //   return this.tasks.filter((task) => task.userId === userId);
  // }

  getUserTasks(userId: number): Observable<any[]> {
    return from(
      fetch(`https://localhost:7103/api/task/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch tasks: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data=>data.tasks)
        .catch((error) => {
          console.error('Error fetching tasks:', error);
          return [];
        })
    );
  }

  addTask(taskData: NewTaskData, userId: number) {
    console.log('add task started');
    const postData = fetch('https://localhost:7103/api/task', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
        completedDate:new Date(),
        userId: userId
      }),
    }).then((response) => response.json());
    console.log(postData);
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.dueDate,
    // });
  }
  completeTask(id: number) {
    console.log(id);
    console.log('add task started');
    const updateTask = fetch(`https://localhost:7103/api/task/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
    console.log(updateTask);
  }
  deleteTask(id: number) {
    console.log('delete task started');
    const updateTask = fetch(`https://localhost:7103/api/task/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
    console.log(updateTask);
  }
  testApi() {
    const fetchUserTasks = fetch(`https://localhost:7103/api/task/${1}`).then(
      (response) => {
        console.log(response);
        return response.json();
      }
    );
    console.log(fetchUserTasks);
    // console.log("from test api");
    // const getUsersTasks=fetch("https://localhost:7103/api/task/u1",
    //   {
    //     method:"GET",
    //     headers:{
    //       "Content-type":"application/json"
    //     },

    //   }
    // ).then((response)=>response.json());
    // console.log(getUsersTasks);
  }
  getData() {
    // const data = fetch('https://localhost:7103/WeatherForecast').then(
    //   (response) => {
    //     console.log('from getData');
    //     return response.json();
    //   }
    // );
    const fetchUserTasks = fetch(`https://localhost:7103/api/task/1`).then(
      (response) => {
        console.log(response);
        return response.json();
      }
    );
    console.log('from getData');
    console.log(fetchUserTasks);
  }
}
