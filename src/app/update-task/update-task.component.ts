import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TasksService],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent{
  ID:any;
  Task:any;

  constructor(private tasksService:TasksService , myActivated:ActivatedRoute,private route:Router){
    this.ID = myActivated.snapshot.params["id"];

  }
  ngOnInit(): void {
    this.tasksService.getTaskByID(this.ID).subscribe({
      next:(data)=>{
        this.Task = data;
        console.log(this.Task)
      },
      error:(err)=>{console.log(err)}
    });
  }
  update(id:any ,title:any ,schedule:any ,priority:any ,status:any){
    let newtask = {title, schedule, priority, status};
    this.tasksService.update(id ,newtask).subscribe({
      next:()=>{this.route.navigate(['/'])}
    })
  }
}
