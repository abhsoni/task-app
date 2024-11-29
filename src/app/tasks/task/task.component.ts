import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Output() complete = new EventEmitter<string>();
  @Output() refetchTasksList=new EventEmitter<void>();
  private tasksService = inject(TasksService);
  async onCompleteTask(){
    console.log(this.task.taskId);
    await this.tasksService.completeTask(this.task.taskId);
    await this.refetchTasksList.emit();
  }
  async onDeleteTask(){
    await this.tasksService.deleteTask(this.task.taskId);
    await this.refetchTasksList.emit();
  }
}
