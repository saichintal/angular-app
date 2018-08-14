import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {
  
  quiz = {}; 

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizServiceClient) { }

  submitQuiz() {
    this.quizService.submitQuiz(this.quiz).then(sub => {
      alert("You recieved a score of:  " + sub.points + " points"); 
      this.router.navigate(['quizzes']);
    })
  }

  cancel() {
    this.router.navigate(['quizzes']);
  }

  ngOnInit() {
    this.quizService
        .findQuizById(this.route.snapshot.paramMap.get('qid'))
        .then(quiz => this.quiz = quiz);
  }

}
