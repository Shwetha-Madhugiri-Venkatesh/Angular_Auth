import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, Output } from '@angular/core';
import { TaskService } from '../Sevices/taskServices';
import { Task } from '../Models/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  task_service: TaskService = inject(TaskService);

  showCreateTaskForm: boolean = false;
  editPage: boolean = false;
  AllTasks: Task[] = [];
  task: Task;
  task_detail:Task;
  selectedId: string;
  detail:boolean=false;
  err_msg:string='';
  isLoading:boolean=false;
  // constructor(private cdr:ChangeDetectorRef){

  // }

  ngOnInit(): void {
    this.getAllTasks();

    this.task_service.errorSubject.subscribe((res:string)=>{
      this.err_msg=res;
      setTimeout(()=>{
        this.err_msg=null;
      },3000)
    })
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  OpenCreateTaskForm() {
    this.editPage = false;
    this.showCreateTaskForm = true;
  }

  collectFormDeatils(form_details:Task) {
    if (this.editPage) {
      this.task_service.updateTask(this.selectedId, form_details).subscribe((res) => {
        console.log(res);
        this.getAllTasks();
      })
    } else {
      // console.log(form_details)
        this.task_service.createTask(form_details).subscribe((res) => {
        console.log(res);
        this.getAllTasks();
      });

    }
  }

  getAllTasks() {
    this.isLoading=true;
    this.task_service.fetchTasks().subscribe((res: Task[]) => {
      this.AllTasks = res;
      console.log(this.AllTasks);
      this.isLoading=false;
    });
  }

  deleteTheTask(id: string) {
    this.task_service.deleteTask(id).subscribe((res) => {
      console.log(res);
      this.getAllTasks();
    });
  }

  edit_record(id: string) {
    this.editPage = true;
    this.showCreateTaskForm = true;
    this.selectedId = id;
    this.task = this.AllTasks.find((task) => task.id === id);
    // console.log(this.task);
  }

  display_details(id:string){
    this.task_detail=this.AllTasks.find((task)=>task.id===id);
    this.detail=true;
  }

  closeTheComp(){
    this.detail=false;
  }
}
