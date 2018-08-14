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
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuestionServiceClient } from './services/question.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseViewComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SectionsComponent,
    QuizListComponent,
    QuizTakerComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserServiceClient, CourseServiceClient, SectionServiceClient, EnrollmentServiceClient, QuizServiceClient, QuestionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
