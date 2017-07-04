import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task.model'

@Component({
  selector: 'edit-task',
  template:`
  <div *ngIf="childselectedTask">
  <h1>Edit Task</h1>
 <div>
   <label>Enter Task Description:</label>
   <input [(ngModel)]="childselectedTask.description">
 </div>
 <div>
   <label>Enter Task ID:</label>
   <input [(ngModel)]="childselectedTask.id">
   <button (click)="doneClicked()">Done</button>
 </div>
</div>


  `

})
export class EditTaskComponent {
  @Input() childselectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}
