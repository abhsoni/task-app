import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: number;
  isAddingTask: boolean = false;
  constructor(private tasksService: TasksService) {}
  tasks$: Observable<any[]> = of([]);
  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && changes['userId'].currentValue) {
      this.fetchTasks();
    }
  }

  private fetchTasks() {
    this.tasks$ = this.tasksService.getUserTasks(this.userId);
    console.log(this.tasks$);
  }
  // ngOnInit() {
  //   this.tasks$ = this.tasksService.getUserTasks(this.userId);
  // }
  // get selectedUserTasks(){
  //   return this.tasksService.getUserTasks(this.userId);
  // }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  onTestApi() {
    console.log('on Test Api clicked!');
    this.tasksService.testApi();
  }
}
