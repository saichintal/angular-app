import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from "./course-navigator/course-navigator.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import { SectionsComponent } from './sections/sections.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionsComponent},
  { path: 'course-view', component: CourseViewComponent},
  { path: 'admin', component: AdminComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
