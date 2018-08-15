import {Injectable} from "@angular/core";

@Injectable()
export class QuestionServiceClient {
  createQuestion(quiz) {
    fetch('https://a-node-server.herokuapp.com/api/question', {
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