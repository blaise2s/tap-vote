// src/app/questionnaires/questionnaires.component.ts

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

import { Questionnaire, QuestionType } from './questionnaire';
import { QuestionnairesService } from './questionnaires.service';

@Component({
  selector: 'tv-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnInit {
  hasBackdrop = true;
  matDrawerMode: MatDrawerMode = 'over';
  questionnaires: Questionnaire[] = [];
  selectedQuestionnaire: Questionnaire = new Questionnaire();
  questionType = QuestionType;
  showAnswer = false;

  private subs = new Subscription();

  constructor(private questionnairesService: QuestionnairesService) {}

  ngOnInit(): void {
    this.subs.add(
      this.questionnairesService.get().subscribe((questionnaires) => {
        this.questionnaires = questionnaires;
        if (this.questionnaires.length > 0 && this.questionnaires[0].id) {
          this.selectedQuestionnaire = this.questionnaires[0];
        }
      })
    );
  }

  onSelectQuestionnaire(selectedQuestionnaire: Questionnaire): void {
    this.selectedQuestionnaire = selectedQuestionnaire;
  }

  onCheckAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }
}
