import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dvh-value-table',
  templateUrl: './dvh-value-table.component.html',
  styleUrls: ['./dvh-value-table.component.scss']
})
export class DvhValueTableComponent implements OnInit {
  @Input()data;
  @Input()patientId;
  @Input()planId;
  color: object  = {
    'PTV_45': {'MinDose': 'badge-warning', 'MeanDose': '', 'MaxDose': ''},
    'PTV_50.4': {'MinDose': 'badge-danger', 'MeanDose': '', 'MaxDose': 'badge-warning'},
    'Bladder': {'MinDose': '', 'MeanDose': '', 'MaxDose': 'badge-danger'},
    'Bowel': {'MinDose': '', 'MeanDose': '', 'MaxDose': 'badge-warning'},
    'Rectum': {'MinDose': '', 'MeanDose': '', 'MaxDose': 'badge-warning'},
  }
  constructor() { }


  ngOnInit() {
    console.log(data);
  }
  getColor(id,cat) {

    if(this.color.hasOwnProperty(id)
        && this.patientId==="Abdomen"
        &&this.planId==='JSu-IM103'){

      return this.color[id][cat]
    }
    return 'badge-success'
  }
}
