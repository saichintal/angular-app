import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Router} from "@angular/router"
import { EnrollmentServiceClient } from '../services/enrollment.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  selectedCourse = {};
  sections = {}; 
  loggedIn = false; 

  constructor(private router: Router, private courseService: CourseServiceClient, private enrollmentService: EnrollmentServiceClient, private userService: UserServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  viewCourse(course) {
    this.router.navigate(['course-view', {cid: course.id}]);
  }

  enrollInCourse(course) {
    this.router.navigate(['sections', {cid: course.id}]);
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
    this.userService.currentUser().then(user => {
        if (user != null) {
          this.loggedIn = true; 
          this.enrollmentService.getSectionsOfStudent(user._id).then(sections => this.sections = sections);
        }})
  }

}
