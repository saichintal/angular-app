
import {Injectable} from '@angular/core';

@Injectable()
export class EnrollmentServiceClient {
  enroll(studentId, sectionId) {
    return fetch('https://a-node-server.herokuapp.com/api/student/' + studentId + '/section/' + sectionId, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
    })
      .then(response => response.json())
  }

  getSectionsOfStudent(studentId) {
    return fetch('https://a-node-server.herokuapp.com/api/student/' + studentId + '/section', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(response => response.json())
  }

  unenroll(studentId, sectionId, enrollment) {

    return fetch('https://a-node-server.herokuapp.com/api/student/' + studentId + '/section/' + sectionId, {
        method: 'delete',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(enrollment)
      })
  }

}