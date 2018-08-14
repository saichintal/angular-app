import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from "../services/quiz.service.client";
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  submissions = []; 
  isAdmin = false; 
  username = ""; 

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceClient, private quizService: QuizServiceClient) { }

  viewStudentAnswers(subId) {
    this.router.navigate(['quiz-answers', {qid: this.route.snapshot.paramMap.get('qid'), sid: subId}]);
  }

  filterUsername() {
    if (this.username == '') {
      this.quizService.viewSubmissionsForQuiz(this.route.snapshot.paramMap.get('qid'))
      .then(subs => this.submissions = subs );
    }
    else {
      this.submissions = this.submissions.filter(sub => sub.student.username == this.username);
    }
    
  }

  ngOnInit() {
    this.userService.currentUser().then(user => {
      if (user.role == 'admin') {
        this.isAdmin = true; 
        this.quizService.viewSubmissionsForQuiz(this.route.snapshot.paramMap.get('qid'))
        .then(subs => this.submissions = subs)
      }
      else {
        this.isAdmin = false; 
        this.quizService.viewStudentSubmissionsForQuiz(this.route.snapshot.paramMap.get('qid'))
        .then(subs => this.submissions = subs )
      }
    })
  }
}
