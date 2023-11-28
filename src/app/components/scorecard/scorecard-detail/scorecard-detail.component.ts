import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FixtureApiResponse } from 'src/app/models/fixture-api-response.model';
import { FixtureResponse } from 'src/app/models/fixture-reponse.model';

@Component({
  selector: 'app-scorecard-detail',
  templateUrl: './scorecard-detail.component.html',
  styleUrls: ['./scorecard-detail.component.css'],
})
export class ScorecardDetailComponent implements OnInit {
  fixtureApiResponse: FixtureApiResponse[] = new Array<FixtureApiResponse>();
  fixtureData!: FixtureResponse[];
  fixtureUrl: string = environment.apiUrl;
  endpoints!: string;
  leagueID!: number | null;
  season!: number;
  team!: number;
  noOfRecords: number = 10;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.leagueID = Number(this.route.snapshot.paramMap.get('league'));
      this.team = Number(this.route.snapshot.paramMap.get('id'));
      let d = new Date();
      this.season = d.getFullYear();
      this.endpoints = `/fixtures?league=${this.leagueID}&season=${this.season}&team=${this.team}&last=${this.noOfRecords}`;
      this.dataService
        .getFixturesData(this.fixtureUrl, this.endpoints)
        .subscribe((res: FixtureApiResponse) => {
          this.fixtureData = res.response;
        });
    });
  }

  back(): void {
    this.router.navigate([`/scorecard/${this.leagueID}`], {
      queryParams: { teamId: this.team },
    });
  }
}
