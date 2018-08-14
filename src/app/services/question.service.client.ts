import {Injectable} from "@angular/core";

@Injectable()
export class QuestionServiceClient {
  createQuestion(quiz) {
    fetch('http://localhost:3000/api/question', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(quiz)
    })
      .then(response => response.json())
  }
}