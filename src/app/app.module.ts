import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionFormComponent } from './components/submission-form/submission-form.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionFormComponent,
    PatientHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
