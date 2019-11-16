import { Component, OnInit } from '@angular/core';
import {VarianApiService} from '../shared/services/varian-api.service';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.scss']
})
export class PatientOverviewComponent implements OnInit {
  patients
  constructor(private varianApiService: VarianApiService) { }

  ngOnInit() {
    this.patients = this.varianApiService.getPatients()
  }

}
