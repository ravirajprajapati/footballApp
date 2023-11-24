import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StandingApiResponse } from './../models/standing-api-response.modal';
import { Observable } from 'rxjs';
import { FixtureApiResponse } from '../models/fixture-api-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // url: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': environment.apiUrl,
      'x-apisports-key': environment.apiKey,
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getStandingData(
    url: string,
    endpoints: string
  ): Observable<StandingApiResponse> {
    return this.http.get<StandingApiResponse>(
      url + endpoints,
      this.httpOptions
    );
  }

  getFixturesData(
    url: string,
    endpoints: string
  ): Observable<FixtureApiResponse> {
    return this.http.get<FixtureApiResponse>(url + endpoints, this.httpOptions);
  }
}
