import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = sectionId => 
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include', 
    })

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json())

  createSection = section =>
    fetch('http://localhost:3000/api/course/' + section.courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())

  updateSection = section =>
      fetch('http://localhost:3000/api/section/' + section._id, {
        method: 'put',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(section)
      })
        .then(response => response.json())

  removeSection = sectionId =>
      fetch('http://localhost:3000/api/section/' + sectionId, {
        method: 'delete',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
      })
        .then(response => response.json())
}
