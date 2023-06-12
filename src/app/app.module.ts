import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SolutionComponent } from './solution/solution.component';
import { DummyComponent } from './dummy/dummy.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SolutionComponent,
    DummyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
MatTabsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
