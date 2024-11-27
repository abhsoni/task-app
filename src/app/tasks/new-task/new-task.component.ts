import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required:true}) userId!:number;
  @Output() close = new EventEmitter<void>();

  private tasksService=inject(TasksService);
  enteredTitle = '';
  enteredDate:Date=new Date();
  enteredSummary = '';
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    console.log("Submit clicked!!!");
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      completedDate:new Date(),
      userId:this.userId
    },this.userId);
    // this.tasksService.getData();
    this.close.emit();
  }
}
