import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutprofileComponent } from './aboutprofile/aboutprofile.component';
import { PortofoliolistComponent } from './portofoliolist/portofoliolist.component';
import { KontaksComponent } from './kontaks/kontaks.component';
import { FooterwebComponent } from './footerweb/footerweb.component';
import {Ng2PageScrollModule} from "ng2-page-scroll";

@NgModule({
  declarations: [
    AppComponent,
    AboutprofileComponent,
    PortofoliolistComponent,
    KontaksComponent,
    FooterwebComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
