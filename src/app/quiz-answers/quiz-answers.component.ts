import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {
  submission = {}; 
  
  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizServiceClient) { }

  ngOnInit() {
    this.quizService.viewSpecificStudentSubmissionForQuiz(this.route.snapshot.paramMap.get('qid'), 
      this.route.snapshot.paramMap.get('sid')).then(sub => this.submission = sub)
  }

}
