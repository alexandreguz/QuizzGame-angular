import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {


  @Input() selectedQuestions;
  @Input() activeQuestionIndex;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedQuestions)
  }

  onAnswer(answerIndex, questionIndex) {
    console.log(answerIndex, questionIndex)
  }


}
