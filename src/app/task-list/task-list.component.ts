import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from './../task.service';
import { MatDialog, MatDialogConfig } from '../../../node_modules/@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any;
  selectedTask: Task;

  loading: boolean = true;

  constructor(private ts: TaskService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tasks = this.ts.tasks.valueChanges();

    this.tasks
      .pipe(take(1))
      .subscribe(() => {
        this.loading = false;
      })
  }

  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.ts.uptadeTask(task);
  }

  showDialog(task?: Task): void {
    const config: MatDialogConfig<any> = (task) ? { data: { task } } : null;
    this.dialog.open(TaskDialogComponent, config);
  }

  onDelete(task: Task): void {
    this.ts.deleteTask(task);
  }

}
