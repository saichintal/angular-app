import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Router, ActivatedRoute} from "@angular/router"
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  courseId = -1;
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {}; 
  canSeeCourse = true; 

  constructor(private router: Router, private courseService: CourseServiceClient, private userService: UserServiceClient, private route: ActivatedRoute) { }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {};
  }

  selectLesson(lesson) {
    var widgets = lesson.widgets; 
    widgets.sort(function(a, b){return a.count - b.count});
    lesson.widgets = widgets; 
    this.selectedLesson = lesson;
  }

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('cid');
    this.courseService.getCourse(this.courseId).then(course => {
      this.userService.currentUser().then(user => {
        if (course.isPrivate && user == null){
            this.canSeeCourse = false; 
        }
        else {
          this.canSeeCourse = true;
        }
        this.selectedCourse = course;
      });
  })}
      

}
