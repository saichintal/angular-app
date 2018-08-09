import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from "../services/section.service.client";
import {EnrollmentServiceClient} from "../services/enrollment.service.client";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections = []
  courseId = -100 
  section = {}

  constructor(private sectionService: SectionServiceClient,
              private userService: UserServiceClient, private enrollmentService: EnrollmentServiceClient, private route: ActivatedRoute) { }

  enroll = section => {
    this.userService.currentUser().then(user => {
      this.enrollmentService
      .enroll(user._id, section._id).then(ans => {
        this.sectionService.findSectionsForCourse(this.courseId)
        .then(sections => this.sections = sections);
      })
    })

  }

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('cid');
    this.sectionService.findSectionsForCourse(this.courseId).then(
      sections => 
      this.sections = sections);
  }

}
