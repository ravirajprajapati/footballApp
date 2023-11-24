import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { StandingApiResponse } from 'src/app/models/standing-api-response.modal';
import { environment } from 'src/environments/environment';
import { Standing } from 'src/app/models/standing.model';

@Component({
  selector: 'app-scorecard-list',
  templateUrl: './scorecard-list.component.html',
  styleUrls: ['./scorecard-list.component.css'],
})
export class ScorecardListComponent implements OnInit {
  standingApiResponse: StandingApiResponse[] = new Array<StandingApiResponse>();
  standingData!: Standing[];
  selectedRow?: number;
  standingUrl = environment.apiUrl;
  endpoints!: string;
  leagueID!: number;
  season!: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.leagueID = Number(this.route.snapshot.paramMap.get('id'));
      let d = new Date();
      this.season = d.getFullYear();
      this.endpoints = `/standings?league=${this.leagueID}&season=${this.season}`;
      this.dataService
        .getStandingData(this.standingUrl, this.endpoints)
        .subscribe((res: StandingApiResponse) => {
          this.standingData = res?.response[0].league.standings[0];
        });
    });

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.selectedRow = Number(params.get('teamId')) || 0;
    });
  }

  teamClickEvent(teamID: number): void {
    this.router.navigate([`/scorecard/${this.leagueID}/team/${teamID}`]);
  }
}
