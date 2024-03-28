import { Component } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// This will allow me to use the Router service within my component to navigate 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  providers: [TasksService],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
//inject service
  constructor(private tasksService:TasksService, private router:Router){}
  Tasks:any

  AddTasks(title:any ,schedule:any ,priority:any ,status:any ){
    let newtask = {title,schedule,priority,status};
    this.tasksService.AddTask(newtask).subscribe({
      next:(data)=>{
        this.Tasks=data
        // Navigate to another page using Router
        this.router.navigate(['/'])
      },
      error:(err)=>{
        console.error(err)
      }
    })
    
    }
    
}
