import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question;

  constructor() { }

  selected(ans) {
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(ans);
  }

  ngOnInit() {
  }

}
