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
        path: ':id',
        component: ScorecardListComponent,
      },
      {
        path: ':league/team/:id',
        component: ScorecardDetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
