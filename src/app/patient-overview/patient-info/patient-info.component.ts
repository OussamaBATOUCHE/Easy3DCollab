import { Component, OnInit } from '@angular/core';
import {VarianApiService} from '../../shared/services/varian-api.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  patients
  patientId
  closeResult: string;
  constructor(private varianApiService: VarianApiService, private  modalService: NgbModal) { }


  ngOnInit() {
    this.patients = this.varianApiService.getPatients()
    this.patients.subscribe()
  }
  getPatientPlans(patientId:string) {
    return this.varianApiService.getPatientPlans(patientId);
  }
  open(content, patientId:string  ) {
    this.patientId = patientId;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }
}
