import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs';
import { StandingApiResponse } from 'src/app/models/standing-api-response.modal';
import { environment } from 'src/environments/environment';
import { Standing } from 'src/app/models/standing.model';

@Component({
  selector: 'app-scorecard-list',
  templateUrl: './scorecard-list.component.html',
  styleUrls: ['./scorecard-list.component.css'],
})
export class ScorecardListComponent implements OnInit {
  standingData: StandingApiResponse[] = new Array<StandingApiResponse>();
  // standingData: any;
  selectedRow: any;
  standingTable!: Standing[];
  standingUrl = './assets/json/standing.json';
  // standingUrl = environment.apiUrl;
  endpoints!: string;
  leagueID!: string | null;
  season!: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit Called ');
    this.route.params.subscribe((val) => {
      this.leagueID = this.route.snapshot.paramMap.get('id');
      this.selectedRow = localStorage.getItem('selected');

      let d = new Date();
      this.season = d.getFullYear();
      // this.endpoints = `/standings?league=${this.leagueID}&season=${this.season}`;
      this.dataService
        .getStandingData(this.standingUrl, this.endpoints)
        .subscribe((res: any) => {
          console.log('API_DATA', res);
          this.standingTable = res?.response[0].league.standings[0];
        });
    });
  }
}
