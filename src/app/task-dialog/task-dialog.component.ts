import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  dialogTitle = 'New Task'
  task: Task = {
    title: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private ts: TaskService,
    private df: MatDialogRef<TaskDialogComponent>) { }

  ngOnInit(): void {
    if (this.data) {
      this.dialogTitle = 'Update Task';
      this.task = this.data.task;
    }
  }

  onSave(): void {
    const operation: Promise<void> =
      (!this.data)
        ? this.ts.createTasks(this.task)
        : this.ts.uptadeTask(this.task);

    operation
      .then(() => {
        if (navigator.onLine) {
          this.df.close();
        } else {
          this.df.close();
        }
      }).catch((error) => {
        if (!navigator.onLine) {
          this.df.close();
        }
      });
  }

}
