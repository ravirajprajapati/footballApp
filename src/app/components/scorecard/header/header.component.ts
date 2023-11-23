import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  country: Array<Country> = [
    {
      name: 'england',
      league: '',
      id: 39,
    },
    {
      name: 'spain',
      league: 'La Liga',
      id: 140,
    },
    {
      name: 'france',
      league: 'Ligue 1',
      id: 61,
    },
    {
      name: 'germany',
      league: 'Bundesliga',
      id: 78,
    },
    {
      name: 'italy',
      league: 'Serie A',
      id: 135,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
