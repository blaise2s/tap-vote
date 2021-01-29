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
  loading = true;
  hasBackdrop = true;
  matDrawerMode: MatDrawerMode = 'over';
  questionnaires: Questionnaire[] = [];
  selectedQuestionnaire: Questionnaire = new Questionnaire();
  questionType = QuestionType;
  showAnswer: boolean[] = [];

  private subs = new Subscription();

  constructor(private questionnairesService: QuestionnairesService) {}

  ngOnInit(): void {
    this.subs.add(
      this.questionnairesService.get().subscribe(
        (questionnaires) => {
          this.questionnaires = questionnaires;
          this.loading = false;
          if (this.questionnaires.length > 0 && this.questionnaires[0].id) {
            this.onNewQuestionnaire(this.questionnaires[0]);
          }
        },
        () => {
          this.loading = false;
        }
      )
    );
  }

  onSelectQuestionnaire(selectedQuestionnaire: Questionnaire): void {
    if (selectedQuestionnaire.id !== this.selectedQuestionnaire.id) {
      this.onNewQuestionnaire(selectedQuestionnaire);
    }
  }

  onCheckAnswer(idx: number): void {
    this.showAnswer[idx] = true;
  }

  onCheckAllAnswers(): void {
    this.showAnswer = this.showAnswer.map(() => true);
  }

  onResetAllAnswers(): void {
    this.showAnswer = this.showAnswer.map(() => false);
  }

  private onNewQuestionnaire(questionnaire: Questionnaire): void {
    this.selectedQuestionnaire = questionnaire;
    this.showAnswer = this.selectedQuestionnaire.sections.map(() => false);
  }
}
