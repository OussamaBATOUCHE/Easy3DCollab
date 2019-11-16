import { Routes, RouterModule } from '@angular/router';
import {TreatmentViewerMasterComponent} from '../../treatment-viewer-master/treatment-viewer-master.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {PatientOverviewComponent} from '../../patient-overview/patient-overview.component';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  { path: 'patients', component: PatientOverviewComponent, data: { title: 'full View2s' }, canActivate: [AuthGuard] },
  { path: 'patient/:patientId/:planId', component: TreatmentViewerMasterComponent, data: { title: 'full View2s' }, canActivate: [AuthGuard] },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  }
];
