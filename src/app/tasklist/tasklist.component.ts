import { Component, OnInit, Input } from '@angular/core';
// import { Task } from './task';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  Tasks: string[] = [];
  today: number = Date.now();
  doneTasks: string[] = [];

  constructor() { }
  addTask(newTask: string) {
    if (newTask) {
      this.Tasks.push(newTask);
      document.querySelector('form').reset();
    }
  }
  deleteAll() {
    if (this.Tasks.length > 0) {
      this.Tasks.splice(0, this.Tasks.length);
    }
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  ngOnInit() {
  }
  //   }
  }


