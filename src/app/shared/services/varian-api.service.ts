import { Injectable } from '@angular/core';
import {RestInterfaceService} from './rest.service';
import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VarianApiService {

  constructor(private restService: RestInterfaceService) { }
  getPatients() {
    return this.restService.get('');
  }
  getPatientPlans(patientId: string) {
    return this.restService.get(patientId + '/plans/');
  }
  getPatientPlan(patientId:string, planId) {
    return this.restService.get(patientId + '/plans/' +planId);

  }
  getDvHCurves(patientId: string, planId: string) {
    const curves = []
    return this.restService.get(patientId + '/plans/' + planId + '/dvhcurves')
  }
  getDvHCurve(patientId: string, planId: string, curveName: string) {
    console.log("called");
    return this.restService.get(patientId + '/plans/' + planId + '/dvhcurves/' + curveName)
  }
  transformDvHCurve(curve: object) {

  }
}
