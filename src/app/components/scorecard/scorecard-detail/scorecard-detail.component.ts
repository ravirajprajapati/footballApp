import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FixtureApiResponse } from 'src/app/models/fixture-api-response.model';
import { FixtureResponse } from 'src/app/models/fixture-reponse.model';

@Component({
  selector: 'app-scorecard-detail',
  templateUrl: './scorecard-detail.component.html',
  styleUrls: ['./scorecard-detail.component.css'],
})
export class ScorecardDetailComponent implements OnInit {
  fixtureData: FixtureApiResponse[] = new Array<FixtureApiResponse>();
  fixtureTable!: FixtureResponse[];
  // fixtureData: any;
  // fixtureUrl: string = environment.apiUrl;
  fixtureUrl: string = './assets/json/fixtures.json';
  endpoints!: string;
  leagueID!: string | null;
  season!: number;
  team!: string | null;
  selected?: string;
  noOfRecords: number = 10;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.leagueID = this.route.snapshot.paramMap.get('league');
      this.team = this.route.snapshot.paramMap.get('id');
      let d = new Date();
      this.season = d.getFullYear();
      this.selected = this.team ?? '';
      // this.endpoints = `/fixtures?league=${this.leagueID}&season=${this.season}&team=${this.team}&last=${this.noOfRecords}`;
      localStorage.setItem('selected', this.selected);
      this.dataService
        .getFixturesData(this.fixtureUrl, this.endpoints)
        .subscribe((res: FixtureApiResponse) => {
          console.log('fixture_DATA', res);
          this.fixtureTable = res.response;
        });
    });
  }

  goback() {
    history.back();
  }
}
