import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Questionnaire } from './questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  private tapVoteApi = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  get(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.tapVoteApi}/questionnaires`);
  }
}
