import {Injectable} from "@angular/core";

@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {
    fetch('https://a-node-server.herokuapp.com/api/quiz', {
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
    fetch('https://a-node-server.herokuapp.com/api/quiz', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
    })
      .then(response => response.json())

   findQuizById = (quizId) =>
      fetch('https://a-node-server.herokuapp.com/api/quiz/' + quizId, {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())

    submitQuiz(quiz) {
      return fetch('https://a-node-server.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
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
      return fetch('https://a-node-server.herokuapp.com/api/quiz/' + quizId + '/submission', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }

    viewSubmissionsForQuiz(quizId) {
      return fetch('https://a-node-server.herokuapp.com/api/quiz/' + quizId + '/submissions', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }

    viewSpecificStudentSubmissionForQuiz(quizId, subId) {
      return fetch('https://a-node-server.herokuapp.com/api/quiz/' + quizId + '/submission/' + subId, {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
    }
}