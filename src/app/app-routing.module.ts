import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { ScorecardDetailComponent } from './components/scorecard/scorecard-detail/scorecard-detail.component';
import { ScorecardListComponent } from './components/scorecard/scorecard-list/scorecard-list.component';

const routes: Routes = [
  {
    path: 'scorecard',
    component: ScorecardComponent,
    children: [
      {
        path: 'scorecard-list/:id',
        component: ScorecardListComponent,
      },
      {
        path: 'scorecard-detail/:league/:id',
        component: ScorecardDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
