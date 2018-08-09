import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Router} from "@angular/router"
import { SectionServiceClient } from '../services/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courses = [];
  selectedCourseId = {};
  sections = [];
  newSection = {title: '', capacity: 0};

  constructor(private router: Router, private courseService: CourseServiceClient, private sectionService: SectionServiceClient) { }

  selectCourse(course) {
    this.selectedCourseId = course.id; 
    this.sectionService.findSectionsForCourse(this.selectedCourseId)
    .then(sections => this.sections = sections);
  }

  updateSection(section) {
    this.newSection = section;
  }

  saveSection() {
    this.sectionService.updateSection(this.newSection)
    .then(() => 
    this.sectionService.findSectionsForCourse(this.selectedCourseId)
    .then(sections => this.sections = sections));
    }

  createSection(){
    var section = {
      title: this.newSection.title,
      capacity: this.newSection.capacity,
      courseId: this.selectedCourseId,
    }
    this.sectionService.createSection(section).then(() => 
    this.sectionService.findSectionsForCourse(this.selectedCourseId)
    .then(sections => this.sections = sections));
  }

  deleteSection(section) {
    this.sectionService.removeSection(section._id).then(() => 
    this.sectionService.findSectionsForCourse(this.selectedCourseId)
    .then(sections => this.sections = sections));
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses)
     this.sectionService.findSectionsForCourse(this.selectedCourseId)
    .then(sections => this.sections = sections);
  }

}
