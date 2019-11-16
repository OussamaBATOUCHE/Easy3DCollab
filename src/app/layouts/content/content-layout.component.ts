import { Component, OnInit, AfterViewInit, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { ConfigService } from 'app/shared/services/config.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss']
})

export class ContentLayoutComponent implements OnInit, AfterViewInit {
  public config: any = {};
  direction: 'ltr';
  @ViewChild('content-wrapper', {static: false}) wrapper: ElementRef;


  constructor(private configService: ConfigService,
      @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2) { }

  ngOnInit() {
    this.config = this.configService.templateConf;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.config.layout.dir) {
        this.direction = this.config.layout.dir;
      }

      if (this.config.layout.variant === "Dark") {
        this.renderer.addClass(this.document.body, 'layout-dark');
      }
      else if (this.config.layout.variant === "Transparent") {
        this.renderer.addClass(this.document.body, 'layout-dark');
        this.renderer.addClass(this.document.body, 'layout-transparent');
        if (this.config.layout.sidebar.backgroundColor) {
          this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        }
        else {
          this.renderer.addClass(this.document.body, 'bg-glass-1');
        }
      }
    }, 0);

  }

}
