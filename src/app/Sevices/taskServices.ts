import { inject, Injectable } from "@angular/core";
import { Task } from "../Models/Task";
import { HttpClient } from "@angular/common/http";
import { catchError, Subject, throwError } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class TaskService{
    http:HttpClient = inject(HttpClient);
    tasks:Task[];
    errorSubject = new Subject();
    createTask(task:Task){
        return this.http.post("http://localhost:3000/tasks",task)
        .pipe(catchError((err)=>{
            this.errorSubject.next(err.error);
            return throwError(()=>err);
        }));
    }

    fetchTasks(){
        return this.http.get("http://localhost:3000/tasks")
        .pipe(catchError((err)=>{
            this.errorSubject.next(err.error.error.message);
            return throwError(()=>err);
        }));
    }

    deleteTask(id:string){
        return this.http.delete(`http://localhost:3000/tasks/${id}`);
    }

    updateTask(id:string,task:Task){
        return this.http.put(`http://localhost:3000/tasks/${id}`,task);
    }
}