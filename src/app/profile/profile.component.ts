import { Component, OnInit } from '@angular/core';
import { EnrollmentServiceClient } from '../services/enrollment.service.client';
import { SectionServiceClient } from "../services/section.service.client";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {};
  sections = {};

  constructor(private router: Router, private sectionService: SectionServiceClient,
    private enrollmentService: EnrollmentServiceClient, private userService: UserServiceClient, private route: ActivatedRoute) { }

  updateUser() {
    this.userService.updateUser(this.user).then(() => {
      return this.userService.currentUser();
    })
      .then(user => this.user = user);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  goToAdminPage(role) {
    if (role == 'admin') {
      this.router.navigate(['admin']);
    }
    else {
      alert("You are not an admin. Please log in with admin credentials");
    }
  }

  viewClass(section) {
    this.router.navigate(['course-view', { cid: section.courseId }]);
  }

  unenroll(userId, sectionId, enrollmentId, event) {
    event.stopPropagation();
    var enrollment = {
      id: enrollmentId
    }
    this.enrollmentService.unenroll(userId, sectionId, enrollment)
    .then(() => this.enrollmentService.getSectionsOfStudent(userId)).then(sections => this.sections = sections);
   }

  ngOnInit() {
    this.userService.currentUser().then(user => {
    if (user == null) {
      alert("You are not logged in"); 
    }
    else {
    this.user = user;
      this.enrollmentService.getSectionsOfStudent(user._id).then(sections => this.sections = sections);
    }
    })
  }

}
