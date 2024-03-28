import { Routes } from '@angular/router';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
//path routing
    {path:"",component:ListOfTasksComponent},
    {path:"add",component:AddTasksComponent},
    {path:"add",component:AddTasksComponent},
    {path:"update/:id",component:UpdateTaskComponent},
    {path:"**",component:ErrorComponent},

];
