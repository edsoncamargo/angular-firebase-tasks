import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/@firebase/util';

import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private db: AngularFirestore) {
  }

      ngOnInit(): void { }

}
