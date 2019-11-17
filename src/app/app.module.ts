
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
  } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { TreatmentViewerMasterComponent} from './treatment-viewer-master/treatment-viewer-master.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { TreatmentViewerComponent } from './treatment-viewer-master/treatment-viewer/treatment-viewer.component';
import { TreatmentSceneComponent } from './treatment-viewer-master/treatment-viewer/treatment-scene/treatment-scene.component';
import { TreatmentControlsComponent } from './treatment-viewer-master/treatment-viewer/treatment-controls/treatment-controls.component';
import {TreatmentSceneControlsControllerService} from './treatment-viewer-master/treatment-viewer/treatment-scene-controls-controller.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewerCommentComponent } from './treatment-viewer-master/viewer-comment/viewer-comment.component';
import { ViewerCommentListComponent } from './treatment-viewer-master/viewer-comment-list/viewer-comment-list.component';
import { environment} from './shared/environment.const';
//import { DvhComponent } from './treatment-viewer-master/dvh/dvh.component';
import { ChartsModule} from 'ng2-charts';
import {DvhComponent} from './treatment-viewer-master/dvh/dvh.component';
import { ImageIsoDoseComponent } from './treatment-viewer-master/image-iso-dose/image-iso-dose.component';
import {NouisliderModule} from 'ng2-nouislider';
import {Ng5SliderModule} from 'ng5-slider';
import { PatientOverviewComponent } from './patient-overview/patient-overview.component';
import { PatientInfoComponent } from './patient-overview/patient-info/patient-info.component';
import { PatientPlansComponent } from './patient-overview/patient-plans/patient-plans.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import { DvhValueTableComponent } from './treatment-viewer-master/dvh/dvh-value-table/dvh-value-table.component';
import { TherapyInformationComponent } from './treatment-viewer-master/dvh/therapy-information/therapy-information.component';
import { SummaryComponent } from './treatment-viewer-master/summary/summary.component';
import { SummaryDiscussionComponent } from './treatment-viewer-master/summary-discussion/summary-discussion.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
  };

  export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }


  @NgModule({
    declarations: [AppComponent, FullLayoutComponent,  TreatmentViewerMasterComponent, TreatmentViewerComponent, TreatmentSceneComponent, TreatmentControlsComponent, ViewerCommentComponent, ViewerCommentListComponent, DvhComponent, ImageIsoDoseComponent, PatientOverviewComponent, PatientInfoComponent, PatientPlansComponent, DvhValueTableComponent, TherapyInformationComponent, SummaryComponent, SummaryDiscussionComponent],
    imports: [
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgbModule,
      ChartsModule,
      Ng5SliderModule,
        FormsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
      PerfectScrollbarModule
    ],
    providers: [
      AuthService,
      AuthGuard,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        TreatmentSceneControlsControllerService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
