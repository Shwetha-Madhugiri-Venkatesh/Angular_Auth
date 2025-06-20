import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Output()
  closeTheComponent:EventEmitter<any> = new EventEmitter;

  @Input()
  selected_task:Task;

  close_Comp(){
    this.closeTheComponent.emit();
  }
}
