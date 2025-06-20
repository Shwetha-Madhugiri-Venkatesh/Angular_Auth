import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output()
  CloseForm:EventEmitter<any> = new EventEmitter;

  @Output()
  sendFormDetails:EventEmitter<Task>=new EventEmitter<Task>;

  @Input()
  theSelectedTask:Task;

  @Input()
  editPageFlag:boolean;
  Title:string='';
  Description:string='';
  Assigned_to:string='';
  Created_at:string='';
  Priority:string='';
  Status:string='';

  OnCloseForm(){
    this.CloseForm.emit();
  }

  form_submit(form:NgForm){
    // console.log(form.value);
    this.sendFormDetails.emit(form.value);
    this.CloseForm.emit();
  }

  ngOnInit(){
    if(this.editPageFlag){
      this.Title=this.theSelectedTask.title;
      this.Description=this.theSelectedTask.description;
      this.Assigned_to=this.theSelectedTask.assigned_to;
      this.Created_at=this.theSelectedTask.created_at
      this.Priority=this.theSelectedTask.priority;
      this.Status=this.theSelectedTask.status;
    }
  }
}
