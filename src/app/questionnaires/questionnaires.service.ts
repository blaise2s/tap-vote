import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Questionnaire } from './questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  // private tapVoteApi = 'https://tap-vote-api.herokuapp.com';
  // private tapVoteApi = 'http://localhost:5000';
  private tapVoteApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.tapVoteApi}/questionnaires`);
  }
}
