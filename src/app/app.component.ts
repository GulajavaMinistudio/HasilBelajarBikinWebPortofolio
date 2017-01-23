import {Component, Inject, ElementRef, ViewChild} from '@angular/core';
import {PageScrollService, PageScrollInstance, PageScrollConfig} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nama_orang = "Rian Yulianto W";
  title = "Android Developer | Web Developer";

  @ViewChild('container')
  private container: ElementRef;

  constructor(private pagescrollservice: PageScrollService,
              @Inject(DOCUMENT) private document: Document) {

    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  public goToHrefTags(elID : string): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, elID);
    this.pagescrollservice.start(pageScrollInstance);
  }

  public goToHeadingInContainer(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInlineInstance(this.document, '#home', this.container.nativeElement);
    this.pagescrollservice.start(pageScrollInstance);
  };
}
