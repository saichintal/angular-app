import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from "./course-navigator/course-navigator.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import { SectionsComponent } from './sections/sections.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { AdminComponent } from './admin/admin.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionsComponent},
  { path: 'course-view', component: CourseViewComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz-taker', component: QuizTakerComponent},
  { path: 'quiz-submissions', component: QuizSubmissionsComponent},
  { path: 'quiz-answers', component: QuizAnswersComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
