import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {
  selectedAnswerIndex = null;
  private _question;
  gameOverMessage:string = "ACABOU O TEMPO"
  @Output() answerQuestion: EventEmitter<number> = new EventEmitter<number>()
  @Input() gameOverState: boolean = false
  @Input()
  set question(val) {
    this._question = val;
    this.selectedAnswerIndex = null;
  };
  get question() {
    return this._question;
  }
  timerInterval: any;
  timeLeft: number;

  constructor(){}

  ngOnInit(): void {
  }


  doAnswer(answerIndex: number) {
    console.log(answerIndex);
    this.selectedAnswerIndex = answerIndex
    this.answerQuestion.emit(answerIndex)
  }

  startTimer() {
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft= 10;
      }
    },1000)
  }
}
