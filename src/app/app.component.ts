import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //       by default route ,my componet to display,
  imports: [RouterOutlet,ListOfTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listOfTasks';
}
