import {Component, Input, OnInit} from '@angular/core';
import {VarianApiService} from '../../shared/services/varian-api.service';

@Component({
  selector: 'app-patient-plans',
  templateUrl: './patient-plans.component.html',
  styleUrls: ['./patient-plans.component.scss']
})
export class PatientPlansComponent implements OnInit {
  @Input() patientId
  patientPlans
  constructor(private varianApiService: VarianApiService) { }

  ngOnInit() {
    this.patientPlans = this.varianApiService.getPatientPlans(this.patientId);
  }

}
