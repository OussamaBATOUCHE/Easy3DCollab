import { Routes, RouterModule } from '@angular/router';
import {CadViewerMasterComponent} from '../../cad-viewer-master/cad-viewer-master.component';
import {AuthGuard} from '../auth/auth-guard.service';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  { path: 'cad', component: CadViewerMasterComponent, data: { title: 'full View2s' }, canActivate: [AuthGuard] },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  }
];
