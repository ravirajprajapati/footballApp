import { Standing } from './standing.model';

export interface League {
  league: any;
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: Standing[][];
}
