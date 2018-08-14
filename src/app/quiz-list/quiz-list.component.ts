import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from "../services/quiz.service.client";
import { QuestionServiceClient } from '../services/question.service.client';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = []

  constructor(private router: Router, private quizService: QuizServiceClient, private userService: UserServiceClient, private questionService: QuestionServiceClient) { }

  takeQuiz(quizId) {
    this.router.navigate(['quiz-taker', { qid: quizId }]);
  }

  viewSubmissions(quizId) {
    this.router.navigate(['quiz-submissions', { qid: quizId }]);
  }

  ngOnInit() {
    this.userService.currentUser().then(user => {
      if (user == null) {
        alert("You are not logged in");
      }
      else {
        this.quizService.findAllQuizzes()
          .then(quizzes => {
            this.quizzes = quizzes
            this.quizzes.forEach(quiz => {
              if (user.role == 'admin') {
                this.quizService.viewSubmissionsForQuiz(quiz._id) 
                .then(subs => quiz.numberOfSubmissions = subs.length)
              }
              else {
                this.quizService.viewStudentSubmissionsForQuiz(quiz._id)
                .then(subs => quiz.numberOfSubmissions = subs.length)
              }
            });
          }); 
          
      }
    })
  }

}
