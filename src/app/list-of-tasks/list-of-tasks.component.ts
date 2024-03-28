import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
// after installing fortawesome suppose to import in your component to can use it
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//all icons i wanna use
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-of-tasks',
  standalone: true,
 //Import HttpClientModule to enable HttpClient service
  imports: [
    HttpClientModule,
    CommonModule , //to can use *ngIf
    RouterModule ,
    FontAwesomeModule
  ],
  // prroviders write in t all service i used
  providers:[TasksService],
  templateUrl: './list-of-tasks.component.html',
  styleUrl: './list-of-tasks.component.css'
})
                                  //define ngOnInit method
export class ListOfTasksComponent implements OnInit {

  //inject service
// first thing will implement it is constructor
constructor(private tasksService:TasksService,private route:Router){}
//define it here to can use it in file html (binding)
icontrash = faTrash;
iconupdate = faRefresh;
iconcheck = faCheck;
iconclose = faClose;
//define all variable 
title: any;
schedule: any;
priority: any;
status: any;
ID:any
Tasks:any



// lifecycle hooks 
//when component is created, there might be initialization logic that needs to be executed
//get all data
ngOnInit(): void {
  //after inject service i wanna excute fun to get all data fron file json if subscribe(sucess) put data in variable
  //if not get me errot 
    this.tasksService.GetAllTasks().subscribe({
    next:(data)=>{
      this.Tasks=data
    },error:(err)=>{
      throw "not data found "
    }
  })
 
}


//toggleStatus    (just update property)
toggleStatus(data: any) {
  //assign value new value 
  const newStatus = data.status === 'Complete' ? 'Incomplete' : 'Complete';
  //get from service function updateStatusand give it id i wanna patch in his object and give it new value
  this.tasksService.updateStatus(data.id, newStatus).subscribe({
    //when sucess req do this arowfunction
    next: () => {
      data.status = newStatus;
    },
    //failed request 
    error: (err) => {
      console.error('Failed to update status:', err);
      //if i deleted this part not effect for any thing
      //here just check for status of error to know with easy way about the problem
      if (err.status === 404) {
        alert(' not found.');
      } else {
        alert(' updating the task status.');
      }
    }
  });
}




//  delete with id take it from html and then get new data
deleteTask(data:any){
  // use flag to make sure he wanna delete or not
  let flag = confirm("Do you sure delete it ?");
  if(flag){
    //invoke  delete fun from service 
  this.tasksService.delete(data.id).subscribe(
    {
      next:()=>{
        // fetch data anther time to get new data
        this.tasksService.GetAllTasks().subscribe({
          next:(data)=>{
            // assign data to task varabile
            this.Tasks=data
          },error:(err)=>{
            throw "not data found "
          }
        })
      }
    }
  )
  }
}

}
