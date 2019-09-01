import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  patientHistory = ['hello', 'hi', 'goodbye', 'bye', 'toodles', 'boobs'];

  constructor() { }

  ngOnInit() {
  }

  onSelect(patient){
    alert(patient)
  }
}
