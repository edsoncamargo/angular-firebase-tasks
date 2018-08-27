import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Modules do angular material
import { MatToolbarModule, MatListModule, MatLineModule, MatSlideToggleModule, MatIconModule, 
  MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
