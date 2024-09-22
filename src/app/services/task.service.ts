import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../../tarefa';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private urlApi = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.urlApi)
  }

  deleteTask(tarefa:Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.urlApi}/${tarefa.id}`)
  }

  addTask(tarefa:Tarefa) :Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.urlApi}`, tarefa)
  }
}

