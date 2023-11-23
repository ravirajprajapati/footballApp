import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { ScorecardDetailComponent } from './components/scorecard/scorecard-detail/scorecard-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ScorecardListComponent } from './components/scorecard/scorecard-list/scorecard-list.component';
import { HeaderComponent } from './components/scorecard/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    ScorecardDetailComponent,
    ScorecardListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
