
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
import { CadViewerMasterComponent} from './cad-viewer-master/cad-viewer-master.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { CadViewerComponent } from './cad-viewer-master/cad-viewer/cad-viewer.component';
import { CadSceneComponent } from './cad-viewer-master/cad-viewer/cad-scene/cad-scene.component';
import { CadControlsComponent } from './cad-viewer-master/cad-viewer/cad-controls/cad-controls.component';
import {CadSceneControlsControllerService} from './cad-viewer-master/cad-viewer/cad-scene-controls-controller.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewerCommentComponent } from './cad-viewer-master/viewer-comment/viewer-comment.component';
import { ViewerCommentListComponent } from './cad-viewer-master/viewer-comment-list/viewer-comment-list.component';
//import { DvhComponent } from './cad-viewer-master/dvh/dvh.component';
import { ChartsModule} from 'ng2-charts';
import {DvhComponent} from './cad-viewer-master/dvh/dvh.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
  };

  export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }


  @NgModule({
    declarations: [AppComponent, FullLayoutComponent,  CadViewerMasterComponent, CadViewerComponent, CadSceneComponent, CadControlsComponent, ViewerCommentComponent, ViewerCommentListComponent, DvhComponent],
    imports: [
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgbModule,
      ChartsModule,
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
        CadSceneControlsControllerService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
