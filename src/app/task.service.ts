import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '../../node_modules/angularfire2/firestore';
import { Task } from './models/task.model';
import { Observable } from '../../node_modules/rxjs';
import { CollectionReference } from '../../node_modules/@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private CHILD_TASKS = '/tasks'

  tasks: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.setTasks();
  }

  private setTasks(): void {
    // Criando uma coleção de task no caminho '/tasks' e obtendo os valores que mudam
    this.tasks = this.db.collection<Task>(this.CHILD_TASKS,
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  createTasks(task: Task): Promise<void> {
    const uid = this.db.createId();
    // O doc, cria uma nova referência no banco de dados (com o caminho indicado).
    // O set, cria um objeto no caminho indicado e com a quantidade de atributos passados.
    // O update, atualiza uma tarefa parcialmente.
    return this.tasks.doc<Task>(uid).set({
      uid,
      title: task.title,
      done: false
    });
  }

  uptadeTask(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).update(task);
  }

  deleteTask(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).delete();
  }

  get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }

}
