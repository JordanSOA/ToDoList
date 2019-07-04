import { Component, OnInit, Input } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
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
  wipTasks: string[] = [];
  doneTasks: string[] = [];
  isDone: boolean;
  cookieValue: string;
  isChecked = false;

  // adding a new task
  addTask(newTask: string) {
    if (newTask) {
      this.Tasks.unshift(newTask);
      document.querySelector('form').reset();
    }
  }
  // put selected task in WIP section
  onGoing() {
    if (!this.isChecked) {
      const wip = this.Tasks.pop();
      this.wipTasks.push(wip);
    }
  }
  // put selected tasks in Done section
  done() {
    if (!this.isChecked) {
      const done = this.wipTasks.pop();
      this.doneTasks.push(done);
    }
  }
  // delete button in TodoSection
  deleteAll() {
    if (this.Tasks.length > 0) {
      this.Tasks.splice(0, this.Tasks.length);
    }
  }
  // delete button in WipSection
  deleteAllWip() {
    if (this.wipTasks.length > 0) {
      console.log('ok');
      this.wipTasks.splice(0, this.wipTasks.length);
    }
  }
  // delete button in DoneSection
  deleteAllDone() {
    if (this.doneTasks.length > 0) {
      this.doneTasks.splice(0, this.doneTasks.length);
    }
  }
  ngOnInit() {
  }

}


