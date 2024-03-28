import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// services are often used to encapsulate reusable logic that can be shared across multiple components.


export class TasksService {
                    //Use HttpClient to make  HTTP requests(GET, POST, PUT, DELETE) to an API or server reusability ,interceptors and Middleware and testability
  constructor(private http:HttpClient) { }
  //Run json file to can get URL to can fetch data
  private DB_URL='http://localhost:3000/tasks';
 
  // I write this functions here to can get it to any file  by inject the service in consructor and invoke function

  //this function get all data
  GetAllTasks(){
    return this.http.get(this.DB_URL)
  }

 //this function add object
  AddTask( task: any) {
    return this.http.post( this.DB_URL,  task );
  }
  //get data by id
  getTaskByID(id:any){
    return this.http.get(`${this.DB_URL}/${id}`);
  }
  //this function update status i will use patch to update property
  updateStatus(id: any, status: string) {
    return this.http.patch( `${this.DB_URL}/${id}`, { status: status });
  }
  // This function used to update i will use put to update all object
  update(id:any , task:any){
    return this.http.put(this.DB_URL+"/"+id,task);
  }
 
  //this function delete according to id
  delete(id:any ){
    return this.http.delete(this.DB_URL+"/"+id);
  }
  
  


}
