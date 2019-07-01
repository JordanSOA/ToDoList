import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task';



@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  Tasks = [];
  today: number = Date.now();

constructor() { }
addTask(newTask: string) {
  if (newTask) {
    this.Tasks.push(newTask);
    document.querySelector('form').reset();
    console.log(this.today);
  }
}
// deleteAll(Tasks: string) {
//   if (Tasks !== '') {
//     document.querySelector('.todo').innerHTML = '';
//   }
// }
ngOnInit() {
}

}
