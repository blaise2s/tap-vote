// src/questionnaires/questionnaires.ts

export class Questionnaire {
  id = '';
  name = '';
  sections: Section[] = [];
}

export class Section {
  name = '';
  questions: Question[] = [];
}

// eslint-disable-next-line no-shadow
export enum QuestionType { // TODO: Investigate if this is a eslint issue
  freeResponse,
  multipleChoiceSingleResponse,
  multipleChoiceMultipleResponse
}

export class Question {
  type: QuestionType = QuestionType.multipleChoiceSingleResponse;
  question = '';
  options: string[] = [];
  answers: string[] = [];
}
