import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = sectionId => 
    fetch('https://a-node-server.herokuapp.com/api/section/' + sectionId + '/enroll', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include', 
    })

  findAllSections = () =>
    fetch('https://a-node-server.herokuapp.com/api/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch('https://a-node-server.herokuapp.com/api/course/' + courseId + '/section')
      .then(response => response.json())

  createSection = section =>
    fetch('https://a-node-server.herokuapp.com/api/course/' + section.courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())

  updateSection = section =>
      fetch('https://a-node-server.herokuapp.com/api/section/' + section._id, {
        method: 'put',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(section)
      })
        .then(response => response.json())

  removeSection = sectionId =>
      fetch('https://a-node-server.herokuapp.com/api/section/' + sectionId, {
        method: 'delete',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
}
