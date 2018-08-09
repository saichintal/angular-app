import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {UserServiceClient} from "./services/user.service.client";
import {CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionServiceClient } from './services/section.service.client';
import { EnrollmentServiceClient } from './services/enrollment.service.client';
import { CourseViewComponent } from './course-view/course-view.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseViewComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserServiceClient, CourseServiceClient, SectionServiceClient, EnrollmentServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
