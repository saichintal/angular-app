import {Injectable} from "@angular/core";

@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {
    fetch('http://localhost:3000/api/quiz', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(quiz)
    })
      .then(response => response.json())
  }

  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
    })
      .then(response => response.json())

   findQuizById = (quizId) =>
      fetch('http://localhost:3000/api/quiz/' + quizId, {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())

    submitQuiz(quiz) {
      return fetch('http://localhost:3000/api/quiz/' + quiz._id + '/submission', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(quiz)
      })
        .then(response => response.json())
    }

    viewStudentSubmissionsForQuiz(quizId) {
      return fetch('http://localhost:3000/api/quiz/' + quizId + '/submission', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }

    viewSubmissionsForQuiz(quizId) {
      return fetch('http://localhost:3000/api/quiz/' + quizId + '/submissions', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }

    viewSpecificStudentSubmissionForQuiz(quizId, subId) {
      return fetch('http://localhost:3000/api/quiz/' + quizId + '/submission/' + subId, {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }
}